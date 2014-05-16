function checkConnection(){navigator.connection.type;return"none"==navigator.connection.type?!1:!0}function showConfirmExit(){navigator.notification.confirm("Do you really want to exit?",exitFromApp,"Exit",["Cancel","OK"])}function exitFromApp(a){2==a&&navigator.app.exitApp()}function goBackButton(){switch(window.location.hash){case"#/offerDetail":window.location.href="#/";break;case"#/offerList":window.location.href="#/";break;case"#/login":window.location.href="#/";break;case"#/signUp":window.location.href="#/";break;case"#/":showConfirmExit();break;default:showConfirmExit()}}function timeConverter(a){var b=new Date(1e3*a),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e=b.getFullYear(),f=c[b.getMonth()],g=b.getDate(),h=d[b.getDay()],i=b.getHours(),j=b.getMinutes(),k=b.getSeconds(),l=h+" "+f+" "+g+" "+e+" "+i+":"+j+":"+k+" GMT-0500";return l}function limitText(a){var b=a,c=b.substr(0,200);return c+"..."}var app={initialize:function(){this.bindEvents()},bindEvents:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){app.receivedEvent("deviceready")},receivedEvent:function(a){console.log("Received Event: "+a),angular.bootstrap(document,["ugcApp"])}},ugcApp=angular.module("ugcApp",["ngSanitize","ngRoute","snap","ngAnimate","timer"]);ugcApp.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"homeController",authenticated:!1}).when("/login",{templateUrl:"views/login.html",controller:"loginController",authenticated:!1}).when("/offerList",{templateUrl:"views/offerList.html",controller:"offerListController",authenticated:!1}).when("/offerDetail",{templateUrl:"views/offerDetail.html",controller:"offerDetailController",authenticated:!1}).when("/signUp",{templateUrl:"views/signUp.html",controller:"signUpController",authenticated:!1}).otherwise({redirectTo:"/"}),window.addEventListener("load",function(){FastClick.attach(document.body)},!1),document.addEventListener("backbutton",goBackButton,!1)}]),ugcApp.config(["snapRemoteProvider",function(a){a.globalOptions.disable="right",a.globalOptions.touchToDrag=!0,a.globalOptions.tapToClose=!0}]),ugcApp.run(["$rootScope","$location","authFactory",function(a,b,c){a.$on("$routeChangeStart",function(a,d){d.authenticated&&!c.isLoggedin()&&b.path("/login")})}]),ugcApp.directive("menuDirective",function(){return{templateUrl:"views/tpl/menu.tpl.html"}}),ugcApp.directive("headerDirective",function(){return{templateUrl:"views/tpl/header.tpl.html"}}),ugcApp.directive("footerDirective",function(){return{templateUrl:"views/tpl/footer.tpl.html"}}),ugcApp.directive("loadingDirective",function(){return{templateUrl:"views/tpl/loading.tpl.html"}}),ugcApp.directive("backImageDirective",function(){return function(a,b,c){var d=c.backImageDirective;b.css({"background-image":"url("+d+")","background-size":"cover"})}}),ugcApp.directive("sliderDirective",["$timeout",function(){return{restrict:"AE",replace:!0,scope:{images:"="},link:function(a){a.currentIndex=0,a.next=function(){a.currentIndex<a.images.length-1?a.currentIndex++:a.currentIndex=0},a.prev=function(){a.currentIndex>0?a.currentIndex--:a.currentIndex=a.images.length-1},a.$watch("currentIndex",function(){a.images.forEach(function(a){a.visible=!1}),a.images[a.currentIndex].visible=!0})},templateUrl:"views/tpl/slider.tpl.html"}}]),angular.module("timer",[]).directive("timer",["$compile",function(a){return{restrict:"EAC",replace:!1,scope:{interval:"=interval",startTimeAttr:"=startTime",endTimeAttr:"=endTime",countdownattr:"=countdown",autoStart:"&autoStart"},controller:["$scope","$element","$attrs","$timeout",function(b,c,d,e){function f(){b.timeoutId&&clearTimeout(b.timeoutId)}function g(){b.seconds=Math.floor(b.millis/1e3%60),b.secondsS=1==b.seconds?"":"s",b.minutes=Math.floor(b.millis/6e4%60),b.minutesS=1==b.minutes?"":"s",b.hours=Math.floor(b.millis/36e5%24),b.hoursS=1==b.hours?"":"s",b.days=Math.floor(b.millis/36e5/24),b.daysS=1==b.days?"":"s",b.sseconds=b.seconds<10?"0"+b.seconds:b.seconds,b.mminutes=b.minutes<10?"0"+b.minutes:b.minutes,b.hhours=b.hours<10?"0"+b.hours:b.hours,b.ddays=b.days<10?"0"+b.days:b.days}"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),b.autoStart=d.autoStart||d.autostart,c.append(0===c.html().trim().length?a("<span>{{millis}}</span>")(b):a(c.contents())(b)),b.startTime=null,b.endTime=null,b.timeoutId=null,b.countdown=b.countdownattr&&parseInt(b.countdownattr,10)>=0?parseInt(b.countdownattr,10):void 0,b.isRunning=!1,b.$on("timer-start",function(){b.start()}),b.$on("timer-resume",function(){b.resume()}),b.$on("timer-stop",function(){b.stop()}),b.$on("timer-clear",function(){b.clear()}),b.$on("timer-set-countdown",function(a,c){b.countdown=c}),b.start=c[0].start=function(){b.startTime=b.startTimeAttr?new Date(b.startTimeAttr):new Date,b.endTime=b.endTimeAttr?new Date(b.endTimeAttr):null,b.countdown||(b.countdown=b.countdownattr&&parseInt(b.countdownattr,10)>0?parseInt(b.countdownattr,10):void 0),f(),h(),b.isRunning=!0},b.resume=c[0].resume=function(){f(),b.countdownattr&&(b.countdown+=1),b.startTime=new Date-(b.stoppedTime-b.startTime),h(),b.isRunning=!0},b.stop=b.pause=c[0].stop=c[0].pause=function(){b.clear(),b.$emit("timer-stopped",{millis:b.millis,seconds:b.seconds,minutes:b.minutes,hours:b.hours,days:b.days})},b.clear=c[0].clear=function(){b.stoppedTime=new Date,f(),b.timeoutId=null,b.isRunning=!1},c.bind("$destroy",function(){f(),b.isRunning=!1}),b.countdownattr?(b.millis=1e3*b.countdownattr,b.addCDSeconds=c[0].addCDSeconds=function(a){b.countdown+=a,b.$digest(),b.isRunning||b.start()},b.$on("timer-add-cd-seconds",function(a,c){e(function(){b.addCDSeconds(c)})})):b.millis=0,g();var h=function(){b.millis=new Date-b.startTime;var a=b.millis%1e3;return b.endTimeAttr&&(b.millis=b.endTime-new Date,a=b.interval-b.millis%1e3),b.countdownattr&&(b.millis=1e3*b.countdown),b.millis<0?(b.stop(),b.millis=0,void g()):(g(),b.timeoutId=setTimeout(function(){h(),b.$digest()},b.interval-a),b.$emit("timer-tick",{timeoutId:b.timeoutId,millis:b.millis}),void(b.countdown>0?b.countdown--:b.countdown<=0&&b.stop()))};(void 0===b.autoStart||b.autoStart===!0)&&b.start()}]}}]),ugcApp.service("sharedPropertiesService",function(){var a="";return{getProperty:function(){return a},setProperty:function(b){a=b}}}),ugcApp.controller("homeController",["$scope","authFactory","$location","offerFactory","sharedPropertiesService","snapRemote",function(a,b,c,d,e){a.txtOnline={text:""},a.txtData={text:""},a.logout=function(){b.logout(),a.sesion={show:!1}},a.viewOffers=function(){c.path("/offerList")},a.viewDetail=function(a){e.setProperty(a),c.path("/offerDetail")},a.sesion=b.isLoggedin()?{show:!0,username:window.localStorage.getItem("username")}:{show:!1},checkConnection()?d.getOfferHome(a):(a.txtOnline={text:"Check internet connectivity..."},navigator.notification.alert("No Network Connection",null,"Message","OK"))}]),ugcApp.controller("loginController",["$scope","authFactory","$location","snapRemote",function(a,b){a.txtOnline={text:""},a.txtData={text:""},a.sesion={show:!1},a.login=function(c){checkConnection()?b.login(c,a):(a.txtOnline={text:"Check internet connectivity"},navigator.notification.alert("No Network Connection",null,"Message","OK"))}}]),ugcApp.controller("signUpController",["$scope","authFactory","$location","snapRemote",function(a,b){a.txtOnline={text:""},a.txtData={text:""},a.sesion={show:!1},a.signUp=function(c){c.pwd==c.confirm_pwd?checkConnection()?b.signUp(c,a):(a.txtOnline={text:"Check internet connectivity"},navigator.notification.alert("No Network Connection",null,"Message","OK")):navigator.notification.alert("Password does not matches",null,"Message","OK")}}]),ugcApp.controller("offerListController",["$scope","offerFactory","authFactory","$location","sharedPropertiesService","snapRemote",function(a,b,c,d,e){a.txtOnline={text:""},a.txtData={text:""},a.data="",a.logout=function(){c.logout()},a.viewDetail=function(a){e.setProperty(a),d.path("/offerDetail")},a.sesion=c.isLoggedin()?{show:!0,username:window.localStorage.getItem("username")}:{show:!1},checkConnection()?b.getOffers(a):(a.txtOnline={text:"Check internet connectivity..."},navigator.notification.alert("No Network Connection",null,"Message","OK"))}]),ugcApp.controller("offerDetailController",["$scope","offerFactory","authFactory","$location","sharedPropertiesService","snapRemote","$http",function(a,b,c,d,e){a.txtOnline={text:""},a.txtData={text:""},a.shipping={text:""},a.user_id=0,a.data={default_qty:6,upgrades_qty:0},a.id=e.getProperty(),"undefined"!=typeof window.localStorage.getItem("offerDetail")&&window.localStorage.removeItem("offerDetail"),a.logout=function(){c.logout()},a.getIt=function(){c.isLoggedin()?navigator.app.loadUrl("http://hotf.undergroundcellar.com/home/step_before_shipping/"+window.localStorage.getItem("token")+"/"+a.data.default_qty+"/"+a.data.default_qty*a.data[0].offer_price_pr_botle+"/"+a.data.upgrades_qty+"/"+a.id+"/"+window.localStorage.getItem("reservation"),{openExternal:!0}):(window.localStorage.setItem("offerDetail",1),d.path("/login"))},a.slideIn=function(a,b,c){var d=document.getElementById("slide-info");d.style.width="100%",0==c&&(document.getElementById("subtitle-information").style.display="block",document.getElementById("winery_offers").style.display="none",document.getElementById("title-information").innerHTML=a,document.getElementById("subtitle-information").innerHTML=b),1==c&&(document.getElementById("title-information").innerHTML=a,document.getElementById("subtitle-information").style.display="none",document.getElementById("winery_offers").style.display="block")},a.slideOut=function(){var a=document.getElementById("slide-info");a.style.width="0%"},a.addQty=function(){a.data.default_qty++,b.getUpgrades(a),a.showShipping()},a.subtractQty=function(){a.data.default_qty--,b.getUpgrades(a),a.showShipping()},a.showShipping=function(){a.data.default_qty>0&&a.data.default_qty<6?a.shipping={text:"Buy "+(6-a.data.default_qty)+" more bottle and shipping costs $5 total!"}:a.data.default_qty>=6&&a.data.default_qty<=11?a.shipping={text:"You`re getting $5 shipping! Buy "+(12-a.data.default_qty)+" more bottles and shipping is free."}:a.data.default_qty>=12&&(a.shipping={text:"You are getting free shipping!"})},a.$on("updateStart",function(){a.showShipping()}),a.sesion=c.isLoggedin()?{show:!0,username:window.localStorage.getItem("username")}:{show:!1},checkConnection()?b.getDetailOffer(a):(a.txtOnline={text:"Check internet connectivity..."},navigator.notification.alert("No Network Connection",null,"Message","OK"))}]),ugcApp.factory("authFactory",["$http","$location",function(a,b){return{login:function(c,d){var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if(!e.test(c.username))return navigator.notification.alert("Invalid email",null,"Message","OK"),event.preventDefault(),!1;var f=window.localStorage.getItem("temp_id")||0,g=a({method:"GET",url:"http://hotf.undergroundcellar.com/Api/authenticate/format/json?email="+c.username+"&password="+c.pass+"&temp_user_id="+f});g.then(function(a){"200"!=a.status?d.txtData={text:"Server Issues, please again."}:"0"==a.data.response_code?navigator.notification.alert("Incorrect Login information. Please check your credentials and try again.",null,"Message","OK"):"undefined"!=typeof a.data.token&&(window.localStorage.setItem("token",a.data.token),window.localStorage.setItem("username",a.data.user_name),window.localStorage.setItem("expireDate",a.data.expireDate),b.path(1==window.localStorage.getItem("offerDetail")?"/offerDetail":"/"))})},signUp:function(c,d){var e=window.localStorage.getItem("temp_id")||0,f=a({method:"GET",url:"http://hotf.undergroundcellar.com/Api/register_user/format/json?first_name="+c.firstname+"&last_name="+c.lastname+"&email="+c.email+"&telephone="+c.telephone+"&pwd="+c.pwd+"&yer="+c.yer+"&day="+c.day+"&mnth="+c.mnth+"&stat="+c.stat+"&temp_user_id="+e});f.then(function(a){"200"!=a.status?d.txtData={text:"Server Issues, please again."}:"0"==a.data.response_code?navigator.notification.alert("Email address is already exist",null,"Message","OK"):"undefined"!=typeof a.data.token&&(window.localStorage.setItem("token",a.data.token),window.localStorage.setItem("username",c.firstname),window.localStorage.setItem("expireDate",a.data.expireDate),navigator.notification.alert("Register sucessfull",null,"Message","OK"),b.path("/")),console.log(a.data)})},logout:function(){window.localStorage.clear(),b.path("/")},isLoggedin:function(){return window.localStorage.getItem("token")?!0:!1}}}]),ugcApp.factory("offerFactory",["authFactory","$http","$location",function(a,b){return{getOffers:function(c){var d=b({method:"GET",url:"http://hotf.undergroundcellar.com/Api/offer/format/json"});d.then(function(b){if("200"!=b.status)c.txtData="Server issues, please again.";else if("-1"==b.data)a.logout();else if("0"==b.data)c.txtData="No deals found.";else{var d=new Array;d[0]=b.data.featured_offer;var e=b.data.featured_offer.wines_price.split(",");d[0].maxRetail=e.pop(),d[0].minRetail=e.shift(),d[0].expiry_date=timeConverter(d[0].expiry_date),""==d[0].offer_img&&(d[0].offer_img="main.jpg");for(var f=1;f<b.data.listing.length;f++)d[f]=b.data.listing[f-1],e=b.data.listing[f-1].wines_price.split(","),d[f].maxRetail=e.pop(),d[f].minRetail=e.shift(),d[f].expiry_date=timeConverter(d[f].expiry_date),d[f].about_winery_clean=limitText(d[f].about_winery_clean),d[f].winemakr_note_clean=limitText(d[f].winemakr_note_clean),""==d[f].offer_img&&(d[f].offer_img="main.jpg");c.data=d}})},getOfferHome:function(c){var d=b({method:"GET",url:"http://hotf.undergroundcellar.com/Api/offer/format/json"});d.then(function(b){if("200"!=b.status)c.txtData="Server issues, please again.";else if("-1"==b.data)a.logout();else if("0"==b.data)c.txtData="No deals found.";else{var d=new Array;d[0]=b.data.featured_offer;var e=b.data.featured_offer.wines_price.split(",");d[0].maxRetail=e.pop(),d[0].minRetail=e.shift(),d[0].expiry_date=timeConverter(d[0].expiry_date),""==d[0].offer_img&&(d[0].offer_img="main.jpg"),d[1]=b.data.listing[0],e=b.data.listing[0].wines_price.split(","),d[1].maxRetail=e.pop(),d[1].minRetail=e.shift(),d[1].expiry_date=timeConverter(d[1].expiry_date),""==d[1].offer_img&&(d[1].offer_img="main.jpg"),d[2]=b.data.listing[1],e=b.data.listing[1].wines_price.split(","),d[2].maxRetail=e.pop(),d[2].minRetail=e.shift(),d[2].expiry_date=timeConverter(d[2].expiry_date),""==d[2].offer_img&&(d[2].offer_img="main.jpg"),c.data=d}})},getDetailOffer:function(c){var d=(window.localStorage.getItem("reservation")||0,window.localStorage.getItem("temp_id")||0),e=window.localStorage.getItem("token")||0,f=b({method:"GET",url:"http://hotf.undergroundcellar.com/Api/offer_details/format/json?user_id="+d+"&token="+e+"&offer_id="+c.id});f.then(function(b){if("200"!=b.status)c.txtData="Server issues, please again.";else if("-1"==b.data)a.logout();else if("0"==b.data)c.txtData="No deals found.";else{var d=new Object;d=b.data,d[0].expiry_date=timeConverter(d[0].expiry_date),c.data=d,c.data[0].remaining_bottle=parseInt(c.data[0].remaining_bottle),c.data.default_qty=parseInt(c.data.default_qty),window.localStorage.setItem("temp_id",b.data.temp_user_id),window.localStorage.setItem("reservation",b.data.reservation_id),c.$emit("updateStart")}})},getUpgrades:function(a){if(""!=a.id){var c=window.localStorage.getItem("token")||0,d=window.localStorage.getItem("temp_id")||0,e=b({method:"GET",url:"http://hotf.undergroundcellar.com/Api/get_upgrades/format/json?offer_id="+a.id+"&user_id_temp="+d+"&user_id="+c+"&bottles_qty="+a.data.default_qty+"&last_bottles_qty=6"});e.then(function(b){"200"!=b.status?a.txtData={text:"Server Issues, please again."}:"0"==b.data?a.txtData={text:"We have some problem please try later."}:(window.localStorage.setItem("temp_id",b.data.temp_user_id),window.localStorage.setItem("reservation",b.data.reservation_id),a.data.upgrades_qty=b.data.upgrades_total)})}}}}]),ugcApp.provider("requestNotification",function(){var a=[],b=[],c=0,d={increment:function(){c++},decrement:function(){c>0&&c--},getCount:function(){return c}};this.subscribeOnRequestStarted=function(b){a.push(b)},this.fireRequestStarted=function(b){return d.increment(),angular.forEach(a,function(a){a(b)}),b},this.subscribeOnRequestEnded=function(a){b.push(a)},this.fireRequestEnded=function(){d.decrement();var a=arguments;return angular.forEach(b,function(b){b.apply(this,a)}),arguments[0]},this.getRequestCount=d.getCount,this.$get=function(){var a=this;return{subscribeOnRequestStarted:a.subscribeOnRequestStarted,subscribeOnRequestEnded:a.subscribeOnRequestEnded,fireRequestEnded:a.fireRequestEnded,fireRequestStarted:a.fireRequestStarted,getRequestCount:a.getRequestCount}}}),ugcApp.config(["$httpProvider","requestNotificationProvider",function(a,b){a.defaults.transformRequest.push(function(a){return b.fireRequestStarted(a),a}),a.defaults.transformResponse.push(function(a){return b.fireRequestEnded(a),a})}]),ugcApp.directive("loadingWidgetDirective",["requestNotification",function(a){return{restrict:"AC",link:function(b,c){c.removeClass("show-progress").addClass("hide-progress"),a.subscribeOnRequestStarted(function(){c.removeClass("hide-progress").addClass("show-progress"),b.msgtxt=""}),a.subscribeOnRequestEnded(function(){0===a.getRequestCount()&&c.removeClass("show-progress").addClass("hide-progress")})}}}]);
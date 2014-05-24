'use strict';

angular.module('igniwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


function HomeController($scope, $translate){
	$scope.base = {title: 'FUELING THE WEB',subtitle: 'Your Ecommerce Software House Partner'};

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };

};


function ContactController($scope, $translate){
	$scope.base = {title: 'CONTACT'};
      $scope.contacts = [{name: 'Pablo Velásquez', charge: 'C.E.O', email: 'pablo@igniweb.com', photo:'images/contact1.png'},{name: 'Fabian Acosta', charge: 'Production Manager', email: 'fabian@igniweb.com', photo:'images/contact2.png'},{name: 'Alex Bárcenas', charge: 'Marketing Director', email: 'alex@igniweb.com', photo:'images/contact3.png'}];

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};


function The_problemsController($scope, $translate){
	$scope.base = {title: 'THE PROBLEMS', content: "Stars ups, small and medium businesses selling onli with particular processes tha existing platforms don't support."};

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};


function Our_solutionsController($scope, $translate){
	$scope.base = {title: 'OUR SOLUTIONS'};
	$scope.solutions = [{title: 'Experienced E-commerce', subtitle: 'Software House'},{title: 'Agile Scrum', subtitle: 'E-commerce Teams'},{title: 'Long Terms bussiness', subtitle: 'Relationships'},{title: 'Permanent', subtitle: 'Improvement'}];

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};


function ExperienceController($scope, $translate){
	$scope.base = {title: 'EXPERIENCE'};

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};


function Bussines_modelController($scope, $translate){
	$scope.base = {title: 'BUSSINES MODEL'};
	$scope.models = [{title: 'Hourly Charge', subtitle: ''},{title: 'Monthly', subtitle: 'valume discuont'},{title: 'Long Terms Commitment', subtitle: 'discount'}];

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};


function ClientsController($scope, $translate){
	$scope.base = {title: 'CLIENTS',content: 'Our clients are located mainly in USA and England, have monthly sales over +300k USD and sell on Ebay / Amazon and their own stores.'};

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};


function The_teamController($scope, $translate){
	$scope.base = {title: 'THE TEAM'};

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};

function TeamController($scope, $translate){
	$scope.base = {title: 'TEAM'};

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};

function CompetitionController($scope, $translate){
	$scope.base = {title: 'COMPETITION', content: 'Competition is large and ther is outsourcing all over the world, but we know that our strengths make a difference.'};

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};

function Our_strengthsController($scope, $translate){
	$scope.base = {title: 'OUR STRENGTHS'};
	$scope.strengths = [{title: 'Continuous E-commerce', subtitle: 'experience'},{title: 'Long Terms bussiness', subtitle: 'relationships (7+years)'},{title: 'US incorporated', subtitle: 'compani since 2007'},{title: 'Permanent communication', subtitle: 'and mutual trust'}, {title: 'Us Eastern Time', subtitle:''}];

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};

function What_do_we_wantController($scope, $translate){
	$scope.base = {title: 'WHAT DO WE WANT?'};
	$scope.paragraphs = [{content: 'We want to be your partner and establish a long term business relationship!'},{content: 'We want to help your business grow and increase you profits having our experienced team as your best ally.'}];

      $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};

function MenuController($scope, $translate){
        $scope.cambiarIdioma = function(idioma){
        $translate.use(idioma);
      };
};

function Google_Plus($scope,$http, $translate){
	var $promise = $http({ method: 'GET', url: 'https://www.googleapis.com/plus/v1/people/108688077431561469128/activities/public?maxResults=99&key=AIzaSyA3eWBMYJ1YjTPp1mfCdKw--_ZkrtUw6x0'});


	$promise.then(function(response){

                if(response.status!="200")
                    scope.txtData='Server issues, please again.';
                else if(response.data=="0")
                    scope.txtData='No deals found.';
                else //if (typeof(response.data.image) !== "undefined")
                {	
                   // scope.data = response.data;
                  	var dataGooglePlus = new Array();

                  	$scope.dataGooglePlus = response.data.items;
                  	

                      $scope.data = 	response.data.item;
              	     console.log($scope.dataGooglePlus);

                }

            });


          $scope.cambiarIdioma = function(idioma){
            $translate.use(idioma);
          };
}
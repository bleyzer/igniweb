'use strict';

angular.module('igniwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


function HomeController($scope){
	$scope.base = {title: 'FUELING THE WEB',subtitle: 'Your Ecommerce Software House Partner'};
};


function ContactController($scope){
	$scope.base = {title: 'CONTACT'};
	$scope.contacts = [{name: 'Pablo Velásquez', charge: 'C.E.O', email: 'pablo@igniweb.com'},{name: 'Fabian Acosta', charge: 'Production Manager', email: 'fabian@igniweb.com'},{name: 'Alex Bárcenas', charge: 'Marketing Director', email: 'alex@igniweb.com'}];
};


function The_problemsController($scope){
	$scope.base = {title: 'THE PROBLEMS', content: "Stars ups, small and medium businesses selling onli with particular processes tha existing platforms don't support."};
};


function Our_solutionsController($scope){
	$scope.base = {title: 'OUR SOLUTIONS'};
	$scope.solutions = [{title: 'Experienced E-commerce', subtitle: 'Software House'},{title: 'Agile Scrum', subtitle: 'E-commerce Teams'},{title: 'Long Terms bussiness', subtitle: 'Relationships'},{title: 'Permanent', subtitle: 'Improvement'}];
};


function ExperienceController($scope){
	$scope.base = {title: 'EXPERIENCE'};
};


function Bussines_modelController($scope){
	$scope.base = {title: 'BUSSINES MODEL'};
	$scope.models = [{title: 'Hourly Charge', subtitle: ''},{title: 'Monthly', subtitle: 'valume discuont'},{title: 'Long Terms Commitment', subtitle: 'discount'}];
};


function ClientsController($scope){
	$scope.base = {title: 'CLIENTS',content: 'Our clients are located mainly in USA and England, have monthly sales over +300k USD and sell on Ebay / Amazon and their own stores.'};
};


function The_teamController($scope){
	$scope.base = {title: 'THE TEAM'};
};

function TeamController($scope){
	$scope.base = {title: 'TEAM'};
};

function CompetitionController($scope){
	$scope.base = {title: 'COMPETITION', content: 'Competition is large and ther is outsourcing all over the world, but we know that our strengths make a difference.'};
};

function Our_strengthsController($scope){
	$scope.base = {title: 'FUELING THE WEB'};
	$scope.strengths = [{title: 'Continuous E-commerce', subtitle: 'experience'},{title: 'Long Terms bussiness', subtitle: 'relationships (7+years)'},{title: 'US incorporated', subtitle: 'compani since 2007'},{title: 'Permanent communication', subtitle: 'and mutual trust'}, {title: 'Us Eastern Time', subtitle:''}];
};

function What_do_we_wantController($scope){
	$scope.base = {title: 'WHAT DO WE WANT?'};
	$scope.paragraphs = [{content: 'We want to be your partner and establish a long term business relationship!'},{content: 'We want to help your business grow and increase you profits having our experienced team as your best ally.'}];
};
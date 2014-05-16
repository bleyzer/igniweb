'use strict';

var igniwebApp = angular.module('igniwebApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])


  igniwebApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      })
      .when('/the_problems', {
        templateUrl: 'views/the_problems.html',
        controller: 'The_problemsController'
      })
       .when('/our_solutions', {
        templateUrl: 'views/our_solutions.html',
        controller: 'Our_solutionsController'
      })
       .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceController'
      })
       .when('/bussines_model', {
        templateUrl: 'views/bussines_model.html',
        controller: 'Bussines_modelController'
      })
       .when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'ClientsController'
      })
       .when('/the_team', {
        templateUrl: 'views/the_team.html',
        controller: 'The_teamController'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamController'
      })
      .when('/competition', {
        templateUrl: 'views/competition.html',
        controller: 'CompetitionController'
      })
      .when('/our_strengths', {
        templateUrl: 'views/our_strengths.html',
        controller: 'Our_strengthsController'
      })
      .when('/what_do_we_want', {
        templateUrl: 'views/what_do_we_want.html',
        controller: 'What_do_we_wantController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

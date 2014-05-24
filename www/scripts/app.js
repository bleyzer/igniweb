'use strict';

var igniwebApp = angular.module('igniwebApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'pascalprecht.translate',
    'ngRoute'
  ])


  igniwebApp.config(function ($routeProvider, $translateProvider) {
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
      .when('/communication', {
        templateUrl: 'views/communication.html',
        controller: 'Google_Plus'
      })
      .otherwise({
        redirectTo: '/'
      });


      $translateProvider.translations('es', {
        'TITULO_HOME': 'ENCENDIENDO LA WEB',
        'SUBTITLE_HOME':'Tu Aliado en el Desarrollo de Projectos de Comercio Electrónico',
        'TITULO_CONTACT':'CONTACTO',
        'CARGO_CEO':'C.E.O',
        'CARGO_PRODUCTIONMANAGER':'Jefe de Producción',
        'CARGO_MARKETINGDIRECTOR':'Director de Marketing',
        'TITLE_THEPROBLEMS':'LOS PROBLEMAS',
        'CONTENT_THEPROBLEMS':"Pequeñas y medianas empresas que venden en linea y con procesos particulares que las plataformas actuales no soportan.",
        'TITLE_OURSOLUTIONS':'NUESTRA SOLUCIÓN',
        'OURSOLUTIONS_1ST':'Experiencia E-commerce',
        'OURSOLUTIONS_1SS':'Software House',
        'OURSOLUTIONS_2ST':'Metodología Agil Scrum',
        'OURSOLUTIONS_2SS':'Equipos E-commerce',
        'OURSOLUTIONS_3ST':'Relaciones de negocios',
        'OURSOLUTIONS_3SS':'a largo plazo',
        'OURSOLUTIONS_4ST':'Mejoras',
        'OURSOLUTIONS_4SS':'permanentes',
        'TITLE_EXPERIENCE':'EXPERIENCIA EN',
        'TITLE_BUSSINESMODEL':'MODELO DE NEGOCIO',
        'BUSSINESMODEL_1T':'Cargo por hora',
        'BUSSINESMODEL_2T':'Descuento',
        'BUSSINESMODEL_2S':'por volumen mensual',
        'BUSSINESMODEL_3T':'Descuentos',
        'BUSSINESMODEL_3S':'por contratos a largo plazo',
        'TITLE_CLIENTS':'NUESTROS CLIENTES',
        'CLIENTS_CONTENT':'Nuestros clientes se encuentran localizados  principalmente en EE.UU. y UK, con ventas mensuales de mas de 300k USD en Ebay y Amazon y venden en sus propias tiendas.',
        'TITLE_THETEAM':'EL EQUIPO',
        'TITLE_TEAM':'EQUIPO',
        'TITLE_COMPETITION':'COMPETENCIA',
        'COMPETITION_CONTENT':'La competencia es grande y podemos encontrar outsourcing alrededor de todo el mundo, pero sabemos que nuestras fortalezas hacen la diferencia',
        'TITLE_OURSTRENGTHS':'NUESTRAS FORTALEZAS',
        'OURSTRENGTHS_1OT':'Experiencia Continua',
        'OURSTRENGTHS_1OS':'en Ecommerce',
        'OURSTRENGTHS_2OT':'Relación de Negocios',
        'OURSTRENGTHS_2OS':'a largo plazo (7+ años).',
        'OURSTRENGTHS_3OT':'Constituida en US',
        'OURSTRENGTHS_3OS':'desde el 2007.',
        'OURSTRENGTHS_4OT':'Comunicación permanente',
        'OURSTRENGTHS_4OS':'confianza mutua',
        'OURSTRENGTHS_5OT':'Zonas Horarias Similares',
        'TITLE_WDWW':'¿QUÉ QUEREMOS?',
        'WDWW_1P':'Queremos ser socio aliado y establecer una relación comercial a largo plazo!',
        'WDWW_2P':'Queremos ayudar a que su negocio crezca y aumente sus beneficios de tener nuestro equipo experimentado como su mejor aliado',
        'LINK_HOME':'Inicio',
        'LINK_CONTACT':'Contacto',
        'LINK_THEPROBLEMS':'Los Problemas',
        'LINK_OURSOLUTION':'Nuestra Solución',
        'LINK_COMMUNICATION':'Communication',
        'LINK_EXPERIENCEIN':'Experiencia en',
        'LINK_BUSSINESMODEL':'Modelo de Negocio',
        'LINK_CLIENTS':'Nuestros Clientes',
        'LINK_THETEAM':'El Equipo',
        'LINK_TEAM':'Equipo',
        'LINK_COMPETITION':'Competencia',
        'LINK_OURSTRENGTHS':'Nuestras Fortalezas',
        'LINK_WDWW':'¿Qué Queremos?',
        'EN': 'Inglés',
        'ES': 'Español'
      });


      $translateProvider.translations('en', {
        'TITULO_HOME': 'FUELING THE WEB',
        'SUBTITLE_HOME':'Your Ecommerce Software House Partner',
        'TITULO_CONTACT':'CONTACT',
        'CARGO_CEO':'C.E.O',
        'CARGO_PRODUCTIONMANAGER':'Production Manager',
        'CARGO_MARKETINGDIRECTOR':'Marketing Director',
        'TITLE_THEPROBLEMS':'THE PROBLEMS',
        'CONTENT_THEPROBLEMS':"Stars ups, small and medium businesses selling online with particular processes that existing platforms don't support.",
        'TITLE_OURSOLUTIONS':'OUR SOLUTIONS',
        'OURSOLUTIONS_1ST':'Experienced E-commerce',
        'OURSOLUTIONS_1SS':'Software House',
        'OURSOLUTIONS_2ST':'Agile Scrum',
        'OURSOLUTIONS_2SS':'E-commerce Teams',
        'OURSOLUTIONS_3ST':'Long Terms bussiness',
        'OURSOLUTIONS_3SS':'Relationships',
        'OURSOLUTIONS_4ST':'Permanent',
        'OURSOLUTIONS_4SS':'Improvement',
        'TITLE_EXPERIENCE':'EXPERIENCE IN',
        'TITLE_BUSSINESMODEL':'BUSSINES MODEL',
        'BUSSINESMODEL_1T':'Hourly Charge',
        'BUSSINESMODEL_2T':'Monthly',
        'BUSSINESMODEL_2S':'valume discuont',
        'BUSSINESMODEL_3T':'Long Terms Commitment',
        'BUSSINESMODEL_3S':'discount',
        'TITLE_CLIENTS':'CLIENTS',
        'CLIENTS_CONTENT':'Our clients are located mainly in USA and England, have monthly sales over +300k USD and sell on Ebay / Amazon and their own stores.',
        'TITLE_THETEAM':'THE TEAM',
        'TITLE_TEAM':'TEAM',
        'TITLE_COMPETITION':'COMPETITION',
        'COMPETITION_CONTENT':'Competition is large and there is outsourcing all over the world, but we know that our strengths make a difference.',
        'TITLE_OURSTRENGTHS':'OUR STRENGTHS',
        'OURSTRENGTHS_1OT':'Continuous E-commerce',
        'OURSTRENGTHS_1OS':'experience',
        'OURSTRENGTHS_2OT':'Long Terms bussiness',
        'OURSTRENGTHS_2OS':'relationships (7+years)',
        'OURSTRENGTHS_3OT':'US incorporated',
        'OURSTRENGTHS_3OS':'compani since 2007',
        'OURSTRENGTHS_4OT':'Permanent communication',
        'OURSTRENGTHS_4OS':'and mutual trust',
        'OURSTRENGTHS_5OT':'Us Eastern Time',
        'TITLE_WDWW':'WHAT DO WE WANT?',
        'WDWW_1P':'We want to be your partner and establish a long term business relationship!',
        'WDWW_2P':'We want to help your business grow and increase you profits having our experienced team as your best ally.',
        'LINK_HOME':'Home',
        'LINK_CONTACT':'Contact',
        'LINK_THEPROBLEMS':'The Problems',
        'LINK_OURSOLUTION':'Our Solution',
        'LINK_COMMUNICATION':'Communication',
        'LINK_EXPERIENCEIN':'Experience in',
        'LINK_BUSSINESMODEL':'Bussines Model',
        'LINK_CLIENTS':'Clients',
        'LINK_THETEAM':'The Team',
        'LINK_TEAM':'Team',
        'LINK_COMPETITION':'Competition',
        'LINK_OURSTRENGTHS':'Our Strengths',
        'LINK_WDWW':'What Do We Want?',
        'EN': 'English',
        'ES': 'Spanish'
      });


      $translateProvider.preferredLanguage('es');
  });

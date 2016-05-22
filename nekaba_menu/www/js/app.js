// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var db = null;
angular.module('starter', ['ionic','ngCordova', 'starter.controllers'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
//    db = $cordovaSQLite.openDB({ name : "my.db" ,loction: "default" });
//    $cordovaSQLite.excute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)" );
 db =openDatabase('mydb','1.0','Test DB',2*1024*1024);
 db.transaction(function(tx){
      tx.executeSql("CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
    });
   
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
       $ionicConfigProvider.tabs.position('bottom');
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.add', {
    url: '/add',
    views: {
        'menuContent': {
            templateUrl: 'templates/add_member.html',
            controller: 'AddMemberCtrl'
        }
    }
      })
      
  .state('app.login', {
    url: '/login',
    views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: ''
        }
      }
    })
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.extraservices', {
      url: '/extra_services',
      views: {
        'menuContent': {
          templateUrl: 'templates/extra_services.html',
          controller: 'ExtraServicesCtrl'
        }
      }
    })
    .state('app.services', {
      url: '/services',
      views: {
        'menuContent': {
          templateUrl: 'templates/services.html',
          controller: 'ServicesCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/services/:serviceId',
    views: {
      'menuContent': {
        templateUrl: 'templates/service.html',
        controller: 'ServiceCtrl'
      }
    }
    })
    .state('app.extrasingle', {
    url: '/extra_services/:extraId',
    views: {
      'menuContent': {
        templateUrl: 'templates/extra_service.html',
        controller: 'ExtraServiceCtrl'
      } 
    }
    })
    .state('app.sqlite', {
    url: '/sqlite',
    views: {
      'menuContent': {
        templateUrl: 'templates/sqlite.html',
        controller: 'ExampleController'
    }}
    })
    .state('complaint', {
    url: '/complaint/:complaintId',
        templateUrl: 'templates/complaint.html',
        controller: 'ComplaintsCtrl'
    })
   ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/profile');
})
.controller("ExampleController", function($scope, $cordovaSQLite) {
 
    $scope.insert = function(firstname, lastname) {
        
//        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
//        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
//            alert("INSERT ID -> " + res.insertId);
//            console.log("INSERT ID -> " + res.insertId);
//        }, function (err) {
//            console.error(err);
//        });
 db.transaction(function(tx){
      tx.executeSql("'INSERT INTO LOGS (id,log) VALUES (?, ?)",[firstname,lastname]);
       alert(firstname+":"+firstname);
    });
    }
 
//    $scope.select = function(lastname) {
//        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
//        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
//            if(res.rows.length > 0) {
//                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
//            } else {
//                console.log("No results found");
//            }
//        }, function (err) {
//            console.error(err);
//        });
//    }
 
});;

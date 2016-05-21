angular.module('starter.controllers', [])

.factory('Services', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var services =  [
    { title: 'التحويلات', id: 1 },
    { title: 'تجديد اشتراك التأمين', id: 2 },
    { title: 'تجديد كارنية النقابة', id: 3 },
    { title: 'كشف حساب', id: 4 },
    { title: 'شكاوي', id: 5 }
  ];

  return {
    all: function() {
      return services;
    },
    get: function(serviceId) {
      for (var i = 0; i < services.length; i++) {
        if (services[i].id === parseInt(serviceId)) {
          return services[i];
        }
      }
      return null;
    }
  };
})

.factory('ExtraServices', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var extraServices = [
        { title: 'حجز دكتور', id: 1 },
        { title: 'المواعيد', id: 2 },
        { title: 'الأطباء المفضلين', id: 3 },
        { title: 'تذكير بالأدوية', id: 4 }
      ];

  return {
    all: function() {
      return extraServices;
    },
    get: function(extraServiceId) {
      for (var i = 0; i < extraServices.length; i++) {
        if (extraServices[i].id === parseInt(extraServiceId)) {
          return extraServices[i];
        }
      }
      return null;
    }
  };
})

.factory('Complaints', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var complaints = [
        { title: 'مستشفى', id: 1 },
        { title: 'معمل', id: 2 },
        { title: 'طبيب', id: 3 },
      ];

  return {
    get: function(complaintId) {
      for (var i = 0; i < complaints.length; i++) {
        if (complaints[i].id === parseInt(complaintId)) {
          return complaints[i];
        }
      }
      return null;
    }
  };
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ServicesCtrl', function($scope,$rootScope, Services) {
  $rootScope.services = Services.all();
  $scope.services = Services.all();
})

.controller('ServiceCtrl', function($scope, $stateParams ,Services) {
    $scope.service = Services.get($stateParams.serviceId);
})

.controller('ExtraServicesCtrl', function($scope, $rootScope, ExtraServices) {
    $rootScope.extraServices = ExtraServices.all();
    $scope.extraServices = ExtraServices.all();
})
.controller('ExtraServiceCtrl', function($scope, $stateParams ,ExtraServices) {
    $scope.extraService = ExtraServices.get($stateParams.extraId);
})
.controller('ComplaintsCtrl', function($scope, $stateParams ,Complaints) {
    $scope.complaint = Complaints.get($stateParams.complaintId);
})
.controller('AddMemberCtrl', function($scope, $rootScope) {
})
.controller('ProfileCtrl', function($scope, $rootScope) {
});


angular.module("app", [
  'ui.bootstrap',
  'category',
  'goals',
  'ui.router',
  'angularMoment',
  'goalProgress'
])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/signin');
  $stateProvider

  .state('signin', {
    url: '/signin',
    templateUrl: './auth/signin.html',
    authenticate: false
  })
  .state('dashboard', {
    url: '/',
    templateUrl: './dashboard/dashboard.html',
    controller: 'categoryController',
    authenticate: true
  })
  .state('goals', {
    url: '/goals',
    templateUrl: './goals/goals.html',
    controller: 'goalsController',
    authenticate: true
  });
})
.run(['$rootScope', '$location', '$state', '$window', function ($rootScope, $location, $state, $window) {

  $rootScope.user = {};

  $window.fbAsyncInit = function() {
    FB.init({
      appId      : '1654239444895169',
      cookie     : true,  // enable cookies to allow the server to access
      status     : true,
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.5' // use graph api version 2.5
    });

    FB.Event.subscribe('auth.authResponseChange', function(res) {

      if (res.status === 'connected') {
        $rootScope.user = res;
        FB.api('/me', function(res) {
          $rootScope.$apply(function() {
            $rootScope.user.data = res;
            console.log($rootScope.user);
          });
        });
        $state.go('dashboard');
      } else {
        $rootScope.user = {};
        $state.go('signin');
      }

    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    if(toState.authenticate && $rootScope.user.status !== 'connected') {
      $state.transitionTo("signin");
      event.preventDefault();
    }
  });

}]);

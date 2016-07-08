angular.module("app", ['ui.bootstrap'])

.controller('appController', function($scope, $http, $document){
  $scope.state = "start"
  $scope.payload = {
    category: "",
    time: "",
    state: ""
  }


  $scope.sendData = function($document){
    var target = document.getElementById('category').innerHTML
    $scope.payload.category = target;
    $scope.payload.time = Date.now();
    $scope.payload.state = $scope.state
    $http.post('/api/toggleActivity', $scope.payload)
  }

  $scope.changeState = function(){
    $scope.state === "start" ? $scope.state = "stop" : $scope.state = "start"
  }

})
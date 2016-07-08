angular.module("app", ['ui.bootstrap'])

.controller('appController', function($scope, $http, $document){
  $scope.state = "Start"
  $scope.payload = {
    category: "",
    timestamp: "",
    state: ""
  }

  $scope.changeState = function(){
    $scope.state === "Start" ? $scope.state = "Stop" : $scope.state = "Start"
  }

  $scope.sendData = function($event, $document){
    var target = document.getElementById('category').innerHTML
    $scope.payload.category = target;
    $scope.payload.timestamp = Date.now();
    $scope.payload.state = $scope.state
    $http.post('/api/toggleActivity', json.stringify($scope.payload))
  }


  $scope.recieveData = function(){

  }
})

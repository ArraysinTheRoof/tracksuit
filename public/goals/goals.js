// create a goal
  // choose a category
    // choose a number of target hours
      // post to server new goal
      // display new goal

angular.module('goals', [])

.controller('goalsController', ['$scope', 'goalsFactory', function($scope, goalsFactory) {
  $scope.categories = goalsFactory.categories;
  $scope.goals = goalsFactory.goals;

  $scope.createGoal = function(category, time) {
    var goal = {
      userID: 'testID', //TODO: Update this to username from global factoryvar
      category: category,
      activity: category, //TODO: Update this to activity from $scope
      time: time
    };

    $scope.goals[goal.activity] = goal;
    $scope.postGoal(goal);
    return goal;
  };

  $scope.postGoal = function(goal) {
    goalsFactory.sendData(goal)
    .then(goalsFactory.getAllData).then(function(response) {console.log(response.data)});
  }

  goalsFactory.getAllData().then(function(response) {
    response.data.forEach(function(goal) {
    $scope.goals[goal.activity] = goal;
  })});
}])

.factory('goalsFactory', ['$http', function($http) {
  var categories = [
    { name: 'Sleep', time: 0, colorClass: 'panel-primary' },
    { name: 'Fun', time: 0, colorClass: 'panel-green' },
    { name: 'Work', time: 0, colorClass: 'panel-red' },
    { name: 'Development', time: 0, colorClass: 'panel-yellow'}
  ];
  var goals = {};

  var sendData = function(payload){
    return $http.post('/api/goals', payload)
  };
  var getAllData = function(user){
    // until user login is implemented, userID can be specified in headers.
    return $http.get('/api/goals', {headers: {'x-userid': 'testID'}});
  }

  return {
    categories: categories,
    goals: goals,
    sendData: sendData,
    getAllData: getAllData
  }
}])


// view goals
  // display actual time and goal time --> eventually display bar chart of activity time vs goal time
    // click on button to edit goal --> eventually click on bar to edit goal
      // on edit goal interface choose a new number of target hours
        // put to server updated goal
        // return to default goal view, displaying updated goal

// TODO goal integration with main view
  // inspiring callouts when you make progress on a goal
  // nagging reminders when you get close to a goal in a 'negative' category
  // neutral callout when you do an activity you don't have a goal for

// TODO create daily or weekly goals

// TODO make suggestions on how to achieve goals based on activity history

// goal schema:
/*
 {
   userID: String,
   category: String,
   activity: String,
   time: Number
 }
*/

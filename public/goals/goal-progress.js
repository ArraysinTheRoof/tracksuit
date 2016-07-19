angular.module('goalProgress', [])

.controller('goalProgressController', ['$scope', 'goalsFactory', 'categoryFactory',
  function($scope, goalsFactory, categoryFactory) {
  $scope.categories = goalsFactory.categories;
  $scope.categories.widths = {};

  $scope.loadGoals = function() {
    goalsFactory.getAllData().then(function(response){
      var allActivities = categoryFactory.get();
      console.log(allActivities)

      var totalActivityLength = {};
      for (var key in allActivities) {
        var catName = allActivities[key].category;
        if (!totalActivityLength[catName]) {
          totalActivityLength[catName] = allActivities[key].duration;
        } else {
          totalActivityLength[catName] += allActivities[key].duration;
        }
      }
      console.log('tal' + JSON.stringify(totalActivityLength));

      response.data.forEach(function(goal) {
        $scope.categories.widths[goal.category] =
          Math.floor((totalActivityLength[goal.category] / (goal.time * 60 * 60 * 1000)) * 100);
        if ($scope.categories.widths[goal.category] > 100) {
          $scope.categories.widths[goal.category] = 100;
        }
      })

      console.log(JSON.stringify($scope.categories.widths))
    })
  }

  setTimeout($scope.loadGoals, 1000);
}])

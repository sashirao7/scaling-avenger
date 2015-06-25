var app = angular.module("myapp", []);

app.controller("MainController", ['$scope', 'nameService', function($scope, nameService) {
    $scope.nameList = "";
    $scope.detailText = "";
    
    $scope.fetchList = function(){
      nameService.fetchNamesList().then(function(result){
        $scope.nameList = result;
      })
    }
    
    $scope.displayStatus = function(detail){
      $scope.detailText = detail;
    }
  }
]);

app.factory("nameService",['$http', '$q', function($http, $q){
  return{
   
   fetchNamesList: function(){
     var df = $q.defer();
     
     $http.get('names.json').success(function(response){
       df.resolve(response);
     }).error(function(){
       df.reject();
     });
     
     return df.promise;
   }
  }
}]);

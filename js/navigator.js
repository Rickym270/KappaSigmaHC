var module = angular.module('KSigFund', []);

module.controller("mainNavigator", function ($scope){
    $scope.types = [
      {url: "test.html",text:"url1"},
      {text: "someurl2", url : "someurl2.html"}
    ];
    
  $scope.selectedType = $scope.types[0];
    
} )
.controller("AnotherCtrl", function($scope){
  $scope.name = "World";
});

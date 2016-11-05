angular.module('tutorialCtrlModule',[])
.controller('TutorialCtrl',["$scope","Calculations", function($scope, Calculations){

    $scope.name = "Błażej Szmit"
    $scope.tutorialObject.bindOutput = 2;
    $scope.timesTwo = function () {
        $scope.tutorialObject.bindOutput =Calculations.timesTwo($scope.tutorialObject.bindOutput);
    }
}])
.directive('welcomeMessage', function(){

    return {
        restrict: 'E',
        template: '<div>Howdy how are you</div>'

    }
})

.factory('Calculations', function(){
    var calculations = {};
        calculations.timesTwo = function(a){
            return a*2;
        }
    return calculations;
});


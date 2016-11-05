angular.module('MyApp',['ngMaterial'])
    .controller('ItemsCtrl',function($scope){
        $scope.amounts = ('1kg 2kg 3kg 4kg 5kg '+'1szt 2szt 3szt 4szt 5szt 6szt 7szt '+'1l 2l 3l 4l 5l').split(' ').map(function(amount){
            return {abbrev: amount};
        });
        $scope.items = [

        ];
        $scope.categories = ('Vegetables Fruits Chemistry Drinks Alcohol Bread ').split(' ').map(function(category){
            return {abbrev: category};
        })

        $scope.pushItem = function(name,amount,category){
            $scope.items.push(
                {
                    name:name,
                    amount:amount,
                    category:category
                }
            )
        };
    });
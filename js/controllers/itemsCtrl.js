angular.module('MyApp',['ngMaterial'])
    .controller('ItemsCtrl',function($scope, $mdSidenav, $mdMedia ){
        $scope.amounts = ('1kg 2kg 3kg 4kg 5kg '+'1szt 2szt 3szt 4szt 5szt 6szt 7szt '+'1l 2l 3l 4l 5l').split(' ').map(function(amount){
            return {abbrev: amount};
        });
        $scope.items = [

        ];
        $scope.categoriesObj = [
            {
                name:'Warzywa',
                img:'img/warzywa.svg'
            },
            {
                name:'Fruits',
                img:'img/owoce.svg'
            },
            {
                name:'Bread',
                img:'img/chleb.svg'
            },
            {
                name:'Dairy',
                img:'img/mleko.svg'
            },
            {
                name:'Meat',
                img:'img/mieso.svg'
            },
            {
                name:'Spices',
                img:'img/noun_75337_cc.svg'
            },
            {
                name:'Drinks',
                img:'img/noun_75336_cc.svg'
            },
            {
                name:'Alcohol',
                img:'img/alkohol.svg'
            },
            {
                name:'Chemia',
                img:'img/noun_75337_cc.svg'
            },
            {
                name:'Toilet',
                img:'img/noun_75337_cc.svg'
            },
            {
                name:'Health',
                img:'img/noun_75337_cc.svg'
            },
            {
                name:'Animals',
                img:'img/noun_75337_cc.svg'
            }
        ];


        $scope.pushItem = function(name,amount,category){
            $scope.items.push(
                {
                    name:name,
                    amount:amount,
                    category:category
                }
            )
        };

        $scope.selectItem = function (item){
            $scope.category = item;

        };
        $scope.selectedIndex = -1; // Whatever the default selected index is, use -1 for no selection

        $scope.itemClicked = function ($index) {
            $scope.selectedIndex = $index;
        };
        $scope.thumbClicked = function(name){
            $scope.category = name;
        };

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
});

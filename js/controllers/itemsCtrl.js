angular.module('MyApp',['ngMaterial'])
    .controller('ItemsCtrl',function($scope){
        $scope.amounts = ('1kg 2kg 3kg 4kg 5kg '+'1szt 2szt 3szt 4szt 5szt 6szt 7szt '+'1l 2l 3l 4l 5l').split(' ').map(function(amount){
            return {abbrev: amount};
        });
        $scope.items = [

        ];
        $scope.categoriesObj = [
            {
            name:'Vegetables',
            img:'img/noun_75334_cc.svg'
            },
            {
                name:'Vegetables',
                img:'img/noun_75333_cc.svg'
            },
            {
                name:'Fruits',
                img:'img/noun_75334_cc.svg'
            },
            {
                name:'Chemistry',
                img:'img/noun_75335_cc.svg'
            },
            {
                name:'Drinks',
                img:'img/noun_75336_cc.svg'
            },
            {
                name:'Alcohol',
                img:'img/noun_75337_cc.svg'
            }
        ]

        $scope.categories = ('Vegetables Fruits Chemistry Drinks Alcohol Bread').split(' ').map(function(category){
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
        $scope.chooseItem = function(item){
            $scope.category = item;
        };
        $scope.thumbClass = 'category';
        $scope.chooseThumb = function(){
            if($scope.thumbClass === category){
                $scope.thumbClass = "category-chosen"
            };
        };
    });
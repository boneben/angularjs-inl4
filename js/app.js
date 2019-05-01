var app = angular.module('shopApp', ['ngRoute'])

    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "pages/card.view.html"
        })

        .when("/card-view", { 
            templateUrl: "pages/card.view.html"
            
        })
        
        .when("/list-view", {
            templateUrl: "pages/list.view.html",
        }).otherwise({
            redirectTo: '/'
        })
    })

    .factory("productsService", function ($http) {
        return {
            products: function () {
                return $http.get("http://localhost:5000/api/products").then(function (response) {
                    return response.data;
                });
            }
        }
    })

    .controller('mainController', function($scope, productsService) {
        
        productsService.products().then(function (data) {
            $scope.products = data;

            /* Products per page */
            $scope.options = [{ value: 5, name: "5" }, { value: 10, name: "10" }, { value: 20, name: "20" }, { value: 50, name: "50" }, { value: 100, name: "100" }];
            $scope.productsPerPage = 10;
            $scope.totalProducts = $scope.products.length;

            /* Sort */
            $scope.sortColumn = "productname";
            $scope.reverseSort = false;

            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }

            /* View card or list */
            $scope.cardActive = true;

            $scope.number = 5;
            $scope.getNumber = function (num) {
                return new Array(num);
            }
        });

    })

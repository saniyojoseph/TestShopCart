'use strict';

// store: contains the product list
// cart: the shopping cart object
function storeController($scope, $routeParams, DataService) {

    // get store and cart
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}

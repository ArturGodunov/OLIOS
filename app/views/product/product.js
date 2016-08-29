import angular from 'angular';
import uiRouter from 'angular-ui-router';

import productComponent from './product.component';

const productModule = angular
    .module('app.view.product', [
        uiRouter
])
    .config(($stateProvider) => {
        $stateProvider
            .state('product', {
                url: '/product',
                component: 'vProduct'
            });
    })
    .component('vProduct', productComponent);

export default productModule;

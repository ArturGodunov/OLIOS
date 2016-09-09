import angular from 'angular';
import uiRouter from 'angular-ui-router';

import productComponent from './product.component';
import storeModule from '../../services/store/store';
import basketService from '../basket/basket.service';

const productModule = angular
    .module('app.view.product', [
        uiRouter,
        storeModule.name,
        basketService.name
])
    .config(($stateProvider) => {
        $stateProvider
            .state('product', {
                url: '/product/:id',
                component: 'vProduct'
            });
    })
    .component('vProduct', productComponent);

export default productModule;

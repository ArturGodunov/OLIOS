import angular from 'angular';
import uiRouter from 'angular-ui-router';

import basketComponent from './basket.component';
import basketService from './basket.service';

const basketModule = angular
    .module('app.view.basket', [
        uiRouter,
        basketService.name
])
    .config(($stateProvider) => {
        $stateProvider
            .state('basket', {
                url: '/basket',
                component: 'vBasket'
            });
    })
    .component('vBasket', basketComponent);

export default basketModule;

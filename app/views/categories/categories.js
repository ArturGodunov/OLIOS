import angular from 'angular';
import uiRouter from 'angular-ui-router';

import categoriesComponent from './categories.component';

const categoriesModule = angular
    .module('app.view.categories', [
        uiRouter
])
    .config(($stateProvider) => {
        $stateProvider
            .state('index', {
                url: '/main',
                template: '<v-categories></v-categories>',
                title: 'Products'
                // component: 'vCategories'
            });
    })
    .component('vCategories', categoriesComponent);

export default categoriesModule;

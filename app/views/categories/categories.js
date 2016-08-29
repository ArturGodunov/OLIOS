import angular from 'angular';
import uiRouter from 'angular-ui-router';

import categoriesComponent from './categories.component';

const categoriesModule = angular
    .module('app.view.categories', [
        uiRouter
])
    .config(($stateProvider) => {
        $stateProvider
            .state('categories', {
                url: '/categories',
                component: 'vCategories'
            });
    })
    .component('vCategories', categoriesComponent);

export default categoriesModule;

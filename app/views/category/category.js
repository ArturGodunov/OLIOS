import angular from 'angular';
import uiRouter from 'angular-ui-router';

import categoryComponent from './category.component';

const categoryModule = angular
    .module('app.view.category', [
        uiRouter
])
    .config(($stateProvider) => {
        $stateProvider
            .state('category', {
                url: '/category',
                component: 'vCategory'
            });
    })
    .component('vCategory', categoryComponent);

export default categoryModule;

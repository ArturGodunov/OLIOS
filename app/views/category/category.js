import angular from 'angular';
import uiRouter from 'angular-ui-router';

import categoryComponent from './category.component';
import storeModule from '../../services/store/store';

const categoryModule = angular
    .module('app.view.category', [
        uiRouter,
        storeModule.name
])
    .config(($stateProvider) => {
        $stateProvider
            .state('category', {
                url: '/category/:slug',
                component: 'vCategory'
            });
    })
    .component('vCategory', categoryComponent);

export default categoryModule;

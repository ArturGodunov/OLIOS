import angular from 'angular';
import uiRouter from 'angular-ui-router';

import searchComponent from './search.component';

const searchModule = angular
    .module('app.view.search', [
        uiRouter
])
    .config(($stateProvider) => {
        $stateProvider
            .state('search', {
                url: '/search',
                component: 'vSearch'
            });
    })
    .component('vSearch', searchComponent);

export default searchModule;

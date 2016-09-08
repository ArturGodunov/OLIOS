import angular from 'angular';
import uiRouter from 'angular-ui-router';

import searchComponent from './search.component';
import storeModule from '../../services/store/store';

const searchModule = angular
    .module('app.view.search', [
        uiRouter,
        storeModule.name
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

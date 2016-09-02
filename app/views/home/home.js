import angular from 'angular';
import uiRouter from 'angular-ui-router';

import homeComponent from './home.component';

const homeModule = angular
    .module('app.view.home', [
        uiRouter
])
    .config(($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<v-home class="c-home-bg u-text-align--center"></v-home>'
            });
    })
    .component('vHome', homeComponent);

export default homeModule;

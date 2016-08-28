import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppComponent from './app.component';
import AppConfig from './app.config';
import AppRun from './app.run';

import Components from './components/components';
// import Directives from './directives/directives';
// import Services from './services/services';
import Views from './views/views';

angular
    .module('app', [
        uiRouter,
        Components.name,
        // Directives.name,
        // Services.name,
        Views.name
    ])
    .component('cApp', AppComponent)
    .config(AppConfig)
    .run(AppRun);

angular.bootstrap(document.getElementById('app-bootstrap'), ['app']);
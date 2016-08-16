import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppComponent from './app.component';
import AppConfig from './app.config';
import AppRun from './app.run';
import Components from './components/components';
import Common from './common/common';

const root = angular
    .module('app', [
        uiRouter,
        Components,
        Common
    ])
    .component('app', AppComponent)
    .config(AppConfig)
    .run(AppRun)
    .name;

export default root;
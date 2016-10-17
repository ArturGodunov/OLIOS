import angular from 'angular';

import testCustomNgmodelComponent from './test-custom-ngmodel.component';

const menu = angular
    .module('app.component.testCustomNgmodel', [])
    .component('cTestCustomNgmodel', testCustomNgmodelComponent);

export default menu;

import angular from 'angular';

import menuComponent from './menu.component';

const menu = angular
    .module('app.component.menu', [])
    .component('cMenu', menuComponent);

export default menu;

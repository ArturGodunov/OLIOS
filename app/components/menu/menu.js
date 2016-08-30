import angular from 'angular';

import menuComponent from './menu.component';
import apiModule from '../../services/api/api';

const menu = angular
    .module('app.component.menu', [
        apiModule.name
    ])
    .component('cMenu', menuComponent);

export default menu;

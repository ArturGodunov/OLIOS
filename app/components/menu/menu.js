import angular from 'angular';

import menuComponent from './menu.component';
import storeModule from '../../services/store/store';

const menu = angular
    .module('app.component.menu', [
        storeModule.name
    ])
    .component('cMenu', menuComponent);

export default menu;

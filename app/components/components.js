import angular from 'angular';

import mainPanel from './main-panel/main-panel';
import menu from './menu/menu';

const components = angular
    .module('app.components', [
        mainPanel.name,
        menu.name
    ]);

export default components;

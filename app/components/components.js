import angular from 'angular';

import mainPanel from './main-panel/main-panel';
import menu from './menu/menu';
import checkoutPopup from './checkout-popup/checkout-popup';
import testCustomNgmodel from './test-custom-ngmodel/test-custom-ngmodel';

const components = angular
    .module('app.components', [
        mainPanel.name,
        menu.name,
        checkoutPopup.name,
        testCustomNgmodel.name
    ]);

export default components;

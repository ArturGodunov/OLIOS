import angular from 'angular';

import mainPanelComponent from './main-pabel.component';

const mainPanel = angular
    .module('app.component.mainPanel', [])
    .component('cMainPanel', mainPanelComponent);

export default mainPanel;

import angular from 'angular';

import ActivatorDirective from './activator.directive';

const activatorModule = angular
    .module('app.directive.activator', [])
    .directive('activator', () => new ActivatorDirective);

export default activatorModule;

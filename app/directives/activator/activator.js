import angular from 'angular';

import ActivatorDirective from './activator.directive';

const activatorModule = angular
    .module('app.directive.activator', [])
    .directive('dActivator', () => new ActivatorDirective);

export default activatorModule;

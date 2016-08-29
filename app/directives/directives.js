import angular from 'angular';

import activator from './activator/activator';

const directives = angular
    .module('app.directives', [
        activator.name
    ]);

export default directives;

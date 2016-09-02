import angular from 'angular';

import ConstantsService from './constants.service';

const constantsModule = angular
    .module('app.service.constants', [])
    .service('constants', ConstantsService);

export default constantsModule;

import angular from 'angular';
import utilsService from './utils.service';

const utilsModule = angular
    .module('app.service.utils', [])
    .service('utils', utilsService);

export default utilsModule;

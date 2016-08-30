import angular from 'angular';
import ngResource from 'angular-resource';

import ApiService from './api.service';

const apiModule = angular
    .module('app.service.api', [
        ngResource
    ])
    .service('api', ApiService);

export default apiModule;

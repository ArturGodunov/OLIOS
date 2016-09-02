import angular from 'angular';

import StoreService from './store.service';
import constantsModule from '../constants/constants';

const storeModule = angular
    .module('app.service.store', [
        constantsModule.name
    ])
    .service('store', StoreService);

export default storeModule;

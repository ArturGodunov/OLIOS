import angular from 'angular';

import store from './store/store';
import constants from './constants/constants';
import immutable from './immutable/immutable';
import utils from './utils/utils';

const services = angular
    .module('app.services', [
        store.name,
        constants.name,
        immutable.name,
        utils.name
    ]);

export default services;

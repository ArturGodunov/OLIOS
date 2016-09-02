import angular from 'angular';

import store from './store/store';
import constants from './constants/constants';

const services = angular
    .module('app.services', [
    store.name,
    constants.name
]);

export default services;

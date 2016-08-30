import angular from 'angular';

import api from './api/api';

const services = angular
    .module('app.services', [
    api.name
]);

export default services;

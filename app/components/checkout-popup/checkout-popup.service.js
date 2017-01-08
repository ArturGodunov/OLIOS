import angular from 'angular';
import constantsModule from '../../services/constants/constants';

function checkoutPopupService($http, constants) {
    const API_BASE_URL = constants.getConstantByKey('API_BASE_URL');
    const API_ORDERS = constants.getConstantByKey('API_ORDERS');

    function sendOrders(data) {
        return $http
            .post(`${API_BASE_URL}${API_ORDERS}`, data)
            .then(response => response.data);
    }

    return {
        send: sendOrders
    };
}

export default angular
    .module('app.component.checkoutPopup.service', [
        constantsModule.name
    ])
    .service('checkoutPopup', checkoutPopupService);
import angular from 'angular';
import constantsModule from '../../services/constants/constants';

class CheckoutPopupService {
    constructor($http, constants) {
        this.$http = $http;
        this.constants = constants;
    }

    setOrders(callback, data) {
        this.$http
            .post(this.constants.API_ORDERS, data)
            // .then(response => callback(this.orders = response.data));
            .then(response => callback(response.data));
    }
}

export default angular
    .module('app.component.checkoutPopup.service', [
        constantsModule.name
    ])
    .service('checkoutPopup', CheckoutPopupService);
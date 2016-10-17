import angular from 'angular';
import ngMessages from 'angular-messages';

import checkoutPopupComponent from './checkout-popup.component';
import CheckoutPopupService from './checkout-popup.service';

const checkoutPopup = angular
    .module('app.component.checkoutPopup', [
        ngMessages,
        CheckoutPopupService.name
    ])
    .component('cCheckoutPopup', checkoutPopupComponent);

export default checkoutPopup;

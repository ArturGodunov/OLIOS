import angular from 'angular';

import checkoutPopupComponent from './checkout-popup.component';

const checkoutPopup = angular
    .module('app.component.checkoutPopup', [])
    .component('cCheckoutPopup', checkoutPopupComponent);

export default checkoutPopup;

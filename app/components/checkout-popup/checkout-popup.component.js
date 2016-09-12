import template from './checkout-popup.html';
import controller from './checkout-popup.controller';

const checkoutPopupComponent = {
    bindings: {
        items: '<'
    },
    template,
    controller
};

export default checkoutPopupComponent;

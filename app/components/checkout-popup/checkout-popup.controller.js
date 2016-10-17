class checkoutPopupController {
    constructor(checkoutPopup) {
        this.checkoutPopup = checkoutPopup;

        this.popupShow = false;
    }

    $onChanges(changes) {
        if (changes.items) {
            this.items = Object.assign({}, this.items);
        }
    }

    openPopup() {
        this.popupShow = true;
    }

    closePopup() {
        this.popupShow = false;
    }

    submitCheckout() {
        this.checkoutPopup.setOrders((data => this.orders = data), this.checkoutData);
    }
}

export default checkoutPopupController;

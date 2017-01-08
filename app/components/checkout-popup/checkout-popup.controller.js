class checkoutPopupController {
    constructor(checkoutPopup) {
        this.checkoutPopup = checkoutPopup;

        this.checkoutData = {};
    }

    $onInit() {
        this.popupShow = false;
        this.loader = false;
    }

    $onChanges({items}) {
        if (items) {
            let order = [];

            items.currentValue.forEach(item => {
                order.push({
                    id: item.id,
                    quantity: item.quantity
                });
            });

            this.checkoutData.order = order;
        }
    }

    openPopup() {
        this.popupShow = true;
    }

    closePopup() {
        this.popupShow = false;
    }

    submitCheckout() {
        this.loader = true;

        this.checkoutPopup.send(this.checkoutData).then(response => this.orders = response);
    }
}

export default checkoutPopupController;

class checkoutPopupController {
    constructor() {
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
}

export default checkoutPopupController;

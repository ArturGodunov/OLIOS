class ProductController {
    constructor($stateParams, basket, store) {
        this.basket = basket;

        store.getProduct((data => this.product = data), $stateParams.id);
    }

    $onInit() {
        this.quantity = 1;
    }

    plusQuantity() {
        this.quantity++;
    }

    minusQuantity() {
        this.quantity -= this.quantity > 0 ? 1 : 0;
    }

    addToCard(item) {
        item.quantity = this.quantity;

        this.basket.addItem(item);
    }
}

export default ProductController;

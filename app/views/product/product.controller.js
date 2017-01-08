class ProductController {
    constructor($stateParams, basket, store) {
        this.basket = basket;

        store.getProduct($stateParams.id).then(response => this.product = response);
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

        this.basket.add(item);
    }
}

export default ProductController;

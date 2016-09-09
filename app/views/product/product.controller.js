class ProductController {
    constructor($stateParams, store, basket) {
        this.basket = basket;

        store.getProduct((data => this.product = data), $stateParams.id);

        this.quantity = 1;
    }

    plusQuantity() {
        this.quantity++;
    }

    minusQuantity() {
        this.quantity > 0 ? this.quantity-- : '';
    }

    addToCard(item) {
        item.quantity = this.quantity;

        this.basket.addItem(item);
    }
}

export default ProductController;

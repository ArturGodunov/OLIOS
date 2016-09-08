class ProductController {
    constructor($stateParams, store) {
        store.getProduct((data => this.product = data), $stateParams.id);

        this.quantity = 1;
    }

    plusQuantity() {
        this.quantity++;
    }

    minusQuantity() {
        this.quantity > 0 ? this.quantity-- : '';
    }
}

export default ProductController;

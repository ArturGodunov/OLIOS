class ProductController {
    constructor($stateParams, store) {
        store.getProduct((data => this.product = data), $stateParams.id);
    }
}

export default ProductController;

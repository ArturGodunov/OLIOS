class ProductController {
    constructor($stateParams, store) {
        store.getProduct((data => {this.product = data; console.log(this.product);}), $stateParams.id);
    }
}

export default ProductController;

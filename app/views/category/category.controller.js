class CategoryController {
    constructor($stateParams, store) {
        store.getCategory($stateParams.slug).then(response => this.category = response);
        store.getProductsOfCategory($stateParams.slug).then(response => this.productsOfCategory = response);
    }
}

export default CategoryController;

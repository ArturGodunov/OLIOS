class CategoryController {
    constructor($stateParams, store) {
        store.getCategory((data => this.category = data), $stateParams.slug);
        store.getProductsOfCategory((data => this.productsOfCategory = data), $stateParams.slug);
    }
}

export default CategoryController;

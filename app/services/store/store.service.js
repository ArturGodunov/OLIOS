class StoreService {
    constructor($http, constants, $filter) {
        this.$http = $http;
        this.constants = constants;
        this.$filter = $filter;

        this.cache = {};
    }

    getCategories(callback) {
        if (this.cache.categories) {
            callback(this.cache.categories)
        } else {
            this.$http.get(this.constants.URL_CATEGORY).then(response => callback(this.cache.categories = response.data));
        }
    }

    getProducts(callback) {
        if (this.cache.products) {
            callback(this.cache.products)
        } else {
            this.$http.get(this.constants.URL_PRODUCTS).then(response => callback(this.cache.products = response.data));
        }
    }

    getCategory(callback, slug) {
        this.getCategories(data => {
            callback(this.$filter('filter')(data, {slug: slug})[0]);
        });
    }

    getProductsOfCategory(callback, slug) {
        this.getProducts(data => {
            callback(this.$filter('filter')(data, {categorySlug: slug}));
        });
    }

    getProduct(callback, id) {
        this.getProducts(dataProducts => {
            let product = this.$filter('filter')(dataProducts, {id: id})[0];

            /**
             * Add category to product
             * */
            this.getCategories(dataCategories => {
                product.category = this.$filter('filter')(dataCategories, {slug: product.categorySlug})[0];
            });

            callback(product);
        });
    }
}

export default StoreService;
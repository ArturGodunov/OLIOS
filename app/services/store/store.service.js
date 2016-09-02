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
        let categories;

        this.getCategories(data => {
            categories = data;
            callback(this.$filter('filter')(categories, {slug: slug})[0]);
        });
    }

    getProductsOfCategory(callback, slug) {
        let products;

        this.getProducts(data => {
            products = data;
            callback(this.$filter('filter')(products, {categorySlug: slug}));
        });
    }
}

export default StoreService;
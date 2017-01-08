function storeService($http, $filter, constants, immutable) {
    const API_BASE_URL = constants.getConstantByKey('API_BASE_URL');
    const API_CATEGORY = constants.getConstantByKey('API_CATEGORY');
    const API_PRODUCTS = constants.getConstantByKey('API_PRODUCTS');
    let cache = {};

    function getCategories() {
        let cacheCategories;
        let httpCategories;

        if (cache.hasOwnProperty('categories')) {
            cacheCategories = Promise.resolve(cache.categories);
        } else {
            httpCategories = $http
                .get(`${API_BASE_URL}${API_CATEGORY}`)
                .then(response => cache.categories = immutable.turn(response.data));
        }

        return cacheCategories || httpCategories;
    }

    function getProducts() {
        let cacheProducts;
        let httpProducts;

        if (cache.hasOwnProperty('products')) {
            cacheProducts = Promise.resolve(cache.products);
        } else {
            httpProducts = $http
                .get(`${API_BASE_URL}${API_PRODUCTS}`)
                .then(response => {
                    cache.products = response.data;

                    cache.products.forEach(item => {
                        /** Add category obj to product */
                        getCategories().then(responseCategories => {
                            item.category = $filter('filter')(responseCategories, {slug: item.categorySlug})[0];
                        });

                        /** Add products without current product (recommended products) */
                        getProductsOfCategory(item.categorySlug).then(responseProductsOfCategories => {
                            item.productsRecomended = $filter('filter')(responseProductsOfCategories, {id: '!' + item.id});
                        });
                    });

                    return cache.products;
                });
        }
        return cacheProducts || httpProducts;
    }

    function getCategory(slug) {
        return getCategories().then(response => $filter('filter')(response, {slug: slug})[0]);
    }

    function getProductsOfCategory(slug) {
        return getProducts().then(response => $filter('filter')(response, {categorySlug: slug}));
    }

    function getProduct(id) {
        return getProducts().then(responseProducts => $filter('filter')(responseProducts, {id: id})[0]);
    }

    return {
        getCategories,
        getProducts,
        getCategory,
        getProductsOfCategory,
        getProduct
    };
}

export default storeService;
class ApiService {
    constructor($resource, $filter) {
        this.$resource = $resource;

        this.baseUrlCategories = 'http://localhost:2403/categories/';
        this.categoriesResource = $resource(this.baseUrlCategories + ":id", { id: "@id" });
        this.categories = this.categoriesResource.query();
    }

    getCategories() {
        return this.categories;
    }

    getCategory(category) {
        return category.$get();
    }
}

export default ApiService;

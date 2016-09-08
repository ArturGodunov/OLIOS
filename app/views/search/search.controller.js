class SearchController {
    constructor(store) {
        store.getProducts((data => this.products = data));
    }

    clearSearchInput() {
        this.search = '';
    }
}

export default SearchController;

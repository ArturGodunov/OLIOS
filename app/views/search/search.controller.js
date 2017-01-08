class SearchController {
    constructor(store) {
        store.getProducts().then(response => this.products = response);
    }

    clearSearchInput() {
        this.search = '';
    }
}

export default SearchController;

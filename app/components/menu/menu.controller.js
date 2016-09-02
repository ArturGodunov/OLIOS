class MenuController {
    constructor(store) {
        store.getCategories(data => this.categories = data);
    }
}

export default MenuController;

class MenuController {
    constructor(api) {
        this.api = api;
        this.categories = this.api.getCategories();
    }

    consoleCategory(category) {
        console.log(this.api.getCategory(category));
    }

}

export default MenuController;

class MenuController {
    constructor(store) {
        store.getCategories().then(response => this.categories = response);
    }

    $onInit() {
        this.activeMenu = false;
    }

    toggleActiveMenu() {
        this.activeMenu = !this.activeMenu;
    }
}

export default MenuController;

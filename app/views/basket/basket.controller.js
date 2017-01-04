class CategoryController {
    constructor(basket) {
        this.basket = basket;

        this.items = basket.getItems();
    }

    plusQuantity(id) {
        this.items = this.basket.plusQuantity(id);
    }

    minusQuantity(id) {
        this.items = this.basket.minusQuantity(id);
    }

    deleteItem(id) {
        this.items = this.basket.deleteItem(id);
    }

    total(items) {
        let totalCost = 0;

        items.forEach(item => totalCost += item.cost * item.quantity);

        return totalCost;
    }
}

export default CategoryController;

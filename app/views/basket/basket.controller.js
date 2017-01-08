class CategoryController {
    constructor(basket) {
        this.basket = basket;

        this.items = basket.get();
    }

    plusQuantity(id) {
        this.items = this.basket.plus(id);
    }

    minusQuantity(id) {
        this.items = this.basket.minus(id);
    }

    deleteItem(id) {
        this.items = this.basket.delete(id);
    }

    total(items) {
        let totalCost = 0;

        items.forEach(item => totalCost += item.cost * item.quantity);

        return totalCost;
    }
}

export default CategoryController;

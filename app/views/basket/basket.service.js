import angular from 'angular';

class BasketService {
    constructor($filter) {
        this.$filter = $filter;

        this.basketItems = [];
    }

    addItem(item) {
        this.basketItems.push(item);
    }

    getItems() {
        return this.basketItems;
    }

    /**
     * Return new basketItems
     * */
    plusQuantity(id) {
        return this.basketItems = this.basketItems.map(currentValue => {
            currentValue.quantity += currentValue.id === id ? 1 : 0;
            return currentValue;
        });
    }

    /**
     * Return new basketItems
     * */
    minusQuantity(id) {
        return this.basketItems = this.basketItems.map(currentValue => {
            currentValue.quantity -= currentValue.id === id && currentValue.quantity > 0 ? 1: 0;
            return currentValue;
        });
    }

    /**
     * Return new basketItems
     * */
    deleteItem(id) {
        return this.basketItems = this.$filter('filter')(this.basketItems, {id: '!' + id});
    }
}

export default angular.module('app.view.basket.service', [])
    .service('basket', BasketService);

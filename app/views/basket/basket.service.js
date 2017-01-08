import angular from 'angular';

function basketService($filter) {
    let basketItems = [];

    function addItem(item) {
        let cloneItem = {};

        Object.keys(item).forEach(key => cloneItem[key] = item[key]);

        const isIncluded = basketItems.some(val => val.id === cloneItem.id);

        if (isIncluded) {
            basketItems.forEach(val => {
                if (val.id === cloneItem.id) {
                    val.quantity += cloneItem.quantity;
                }
            });
        } else {
            basketItems.push(cloneItem);
        }
    }

    function getItems() {
        return basketItems;
    }

    function plusQuantity(id) {
        return basketItems = basketItems.map(currentValue => {
            currentValue.quantity += currentValue.id === id ? 1 : 0;
            return currentValue;
        });
    }

    function minusQuantity(id) {
        return basketItems = basketItems.map(currentValue => {
            currentValue.quantity -= currentValue.id === id && currentValue.quantity > 0 ? 1: 0;
            return currentValue;
        });
    }

    function deleteItem(id) {
        return basketItems = $filter('filter')(basketItems, {id: '!' + id});
    }

    return {
        add: addItem,
        get: getItems,
        plus: plusQuantity,
        minus: minusQuantity,
        delete: deleteItem
    };
}

export default angular.module('app.view.basket.service', [])
    .service('basket', basketService);
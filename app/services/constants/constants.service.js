function constantsService(immutable) {
    const freezeObjectOfConstants = immutable.turn({
        API_BASE_URL: 'http://localhost:2403/',
        API_CATEGORY: 'categories',
        API_PRODUCTS: 'products',
        API_ORDERS: 'orders'
    });

    function getConstantByKey(key) {
        if (!freezeObjectOfConstants.hasOwnProperty(key)) {
            throw new Error(`The key "${key}" do not exist as a constant.`);
        }

        return freezeObjectOfConstants[key];
    }

    return {
        getConstantByKey
    };
}

export default constantsService;

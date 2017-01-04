class ConstantsService {
    constructor() {
        this.API_BASE_URL = 'http://localhost:2403/';
        this.API_CATEGORY = `${this.API_BASE_URL}categories`;
        this.API_PRODUCTS = `${this.API_BASE_URL}products`;
        this.API_ORDERS = `${this.API_BASE_URL}orders`;
    }
}

export default ConstantsService;

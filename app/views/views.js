import angular from 'angular';

import categories from './categories/categories';
import home from './home/home';
import product from './product/product';
import search from './search/search';

const views = angular
    .module('app.views', [
        categories.name,
        home.name,
        product.name,
        search.name
    ]);

export default views;
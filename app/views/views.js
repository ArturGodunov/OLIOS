import angular from 'angular';

import category from './category/category';
import home from './home/home';
import product from './product/product';
import search from './search/search';
import basket from './basket/basket';

const views = angular
    .module('app.views', [
        category.name,
        home.name,
        product.name,
        search.name,
        basket.name
    ]);

export default views;
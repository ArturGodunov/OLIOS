import angular from 'angular';

import category from './category/category';
import home from './home/home';
import product from './product/product';
import search from './search/search';

const views = angular
    .module('app.views', [
        category.name,
        home.name,
        product.name,
        search.name
    ]);

export default views;
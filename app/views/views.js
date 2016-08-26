import angular from 'angular';

import categories from './categories/categories';

const views = angular
    .module('app.views', [
        categories.name
    ]);

export default views;
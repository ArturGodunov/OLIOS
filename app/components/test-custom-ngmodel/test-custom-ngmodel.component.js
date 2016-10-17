import template from './test-custom-ngmodel.html';
import controller from './test-custom-ngmodel.controller.js';

const menuComponent = {
    require: {
        ngModel: 'ngModel'
    },
    template,
    controller
};

export default menuComponent;

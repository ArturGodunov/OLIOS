export default class ActivatorDirective {
    constructor() {
        this.restrict = 'A';
    }

    link(scope, element, attrs) {
        element.on('click', function () {
            element.toggleClass('active');
        });
    }
}

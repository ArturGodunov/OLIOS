class TestCustomNgmodelController {
    constructor($element) {
        this.element = $element;
    }

    $postLink() {
        this.initNgModel();
    }

    initNgModel() {
        this.ngModel.$render = () => {
            this.element.html(this.ngModel.$viewValue || '');
        };
        this.element.on('blur keyup change', () => {
            this.setValue();
        });
    }

    setValue() {
        let html = this.element.html();
        this.ngModel.$setViewValue(html);
    }
}

export default TestCustomNgmodelController;

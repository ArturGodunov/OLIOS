export default class mainPanelController {
    constructor($state) {
        this.state = $state;
        this.title = $state.current.title;
    }
}

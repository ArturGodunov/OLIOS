import template from './main-panel.html';

const mainPanelComponent = {
    bindings: {
        href: '@'
    },
    template,
    transclude: {
        'logo': 'transcludeLogo',
    }
};

export default mainPanelComponent;

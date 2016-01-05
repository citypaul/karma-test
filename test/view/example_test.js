var App = require('./../../app/example'),
    React = require('react');

function getNewMountPoint() {
    var domNode = document.createElement('div');
    document.body.appendChild(domNode);
    return domNode;
};

function renderComponent(reactClass, props, mountPoint) {
    return React.render(
        React.createElement(
            reactClass,
            props
        ),
        mountPoint
    );
};


it('should render the component', function () {
    var element = renderComponent(App, {}, getNewMountPoint());
    console.log(element.getDOMNode());
});
//it('should console.log', function () {
//    console.log(App);
//});
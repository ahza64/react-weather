var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <h2>main component</h2>
      </div>
    );
  }
});

module.exports = Main;

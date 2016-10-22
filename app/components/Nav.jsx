var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        // React Links for custom styles
        <Link to="/" activeClassName="active" activeStyle{{fontWeight: 'bold'}}>Get Weather</Link>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/examples" activeClassName="active">Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;

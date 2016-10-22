var React = require('react');

var WeatherForm = React.createClass({
  render: function () {
    return (
      <form>
        <div>
          <input type="text"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;

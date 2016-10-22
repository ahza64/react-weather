var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  render: function () {
    return (
      <h3>
        weather component
        <WeatherForm/>
        <WeatherMessage/>
      </h3>
    );
  }
});

module.exports = Weather;

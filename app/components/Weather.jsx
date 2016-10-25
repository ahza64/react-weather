var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    }
  },

  handleSearch: function (location) {
    // binding "this" to child function
    var that = this;

    openWeatherMap.getTemp(location).then(function (temp) {
      // "this" gets lost when in this function, have to pass var
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
    });
  },
  render: function () {
    var {temp, location} = this.state;

    return (
      <div>
        <h3>
          weather component
        </h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }
});

module.exports = Weather;

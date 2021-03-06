var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to the about page</p>
      <p>
        This is a weatehr app built on React.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ol>
    </div>
  )
};

module.exports = About;

var React = require('react');
var ReactDOM = require('react-dom');
// var Route = require('react-router').Route;
// object destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);

require('../../vendor/bootstrap/css/bootstrap.css');
require('../../vendor/bootstrap/css/bootstrap-theme.css');
require('../../vendor/bootstrap/js/bootstrap');
require('../css/main.scss');

var LeaderBoard = require('./components/leaderBoard/leaderBoard');

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <LeaderBoard />,
  document.getElementById('app')
);


"use strict";
var React = require('react');
var LeaderList = require('./leaderList');
var recentUrl = 'http://fcctop100.herokuapp.com/api/fccusers/top/recent';
// var allTimeUrl = 'http://fcctop100.herokuapp.com/api/fccusers/top/alltime';

/**
 * View controller. Contains the wrapper and all the data for the LeaderBoard component.
 */
var LeaderBoard = React.createClass({
  getInitialState: function getInitialState() {
    this.getRecentCampers();
    return {
      campers: []
    };
  },

  getRecentCampers: function getRecentCampers() {
    var self = this;
    $.getJSON(recentUrl, function (data) {
      self.setState({campers: data});
    });
  },

  render: function render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <LeaderList campers={this.state.campers}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeaderBoard;

"use strict";
var React = require('react');
var LeaderList = require('./leaderList');

/**
 * View controller. Contains the wrapper and all the data for the LeaderBoard component.
 */
var LeaderBoard = React.createClass({
  render: function render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <LeaderList />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeaderBoard;

"use strict";
var React = require('react');
var LeaderRecord = require('./leaderRecord');

var LeaderList = React.createClass({
  render: function render() {
    return (
      <div className="table-responsive">
        <h2 className="text-primary">Camper LeaderBoard</h2>
        <table className="table table-striped">
          <caption>Camper ranking is displayed by last 30 days and total.</caption>
          <thead>
          <th>Rank</th>
          <th>Camper Name</th>
          <th>Points in last 30 days</th>
          <th>All time points</th>
          </thead>
          <tbody>
            <LeaderRecord />
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = LeaderList;

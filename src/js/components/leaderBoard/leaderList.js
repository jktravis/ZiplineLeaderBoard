"use strict";
var React = require('react');
var LeaderRecord = require('./leaderRecord');

var LeaderList = React.createClass({
  propTypes: {
    campers: React.PropTypes.array.isRequired
  },
  render: function render() {
    var createLeaderRecord = function (camper) {
      return (
        <LeaderRecord key={camper.username} camper={camper} />
      );
    };
    return (
      <div className="table-responsive">
        <h2 className="text-primary">Camper LeaderBoard</h2>
        <table className="table table-striped">
          <caption>Camper ranking is displayed by last 30 days and total.</caption>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Camper Name</th>
              <th>Points in last 30 days</th>
              <th>All time points</th>
            </tr>
          </thead>
          <tbody>
            {this.props.campers.map(createLeaderRecord, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = LeaderList;

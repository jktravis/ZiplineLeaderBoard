"use strict";
var React = require('react');
var LeaderRecord = require('./leaderRecord');
var ListTypes = require('../../constants/listTypes');

/**
 * Provides a the list, or table, in which to display the campers.
 */
var LeaderList = React.createClass({
  propTypes: {
    campers: React.PropTypes.array.isRequired,
    onSort: React.PropTypes.func.isRequired
  },
  render: function render() {
    var createLeaderRecord = function (camper, index) {
      return (
        <LeaderRecord key={camper.username} camper={camper} rank={index} />
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
              <th className="profile">Camper Name</th>
              <th>
                <a href="#" onClick={this.props.onSort}
                     id={ListTypes.RECENT}
                     className="sort">Points in last 30 days</a> { " " }
                <span className="glyphicon glyphicon-sort-by-attributes-alt"/>
              </th>
              <th>
                <a href="#" className="sort"
                     id={ListTypes.ALL_TIME}
                     onClick={this.props.onSort}>All time points</a> { " " }
                <span className="glyphicon"/>
              </th>
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

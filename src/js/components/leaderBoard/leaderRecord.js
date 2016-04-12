"use strict";

var React = require('react');

var LeaderRecord = React.createClass({
  propTypes: {
    camper: React.PropTypes.object.isRequired
  },

  render: function render() {
    return (
      <tr>
        <td>Rank</td>
        <td>{this.props.camper.username}</td>
        <td>{this.props.camper.recent}</td>
        <td>{this.props.camper.alltime}</td>
      </tr>
    );
  }
});

module.exports = LeaderRecord;

"use strict";

var React = require('react');

var LeaderRecord = React.createClass({
  render: function render() {
    return (
      <tr>
        <td>Rank</td>
        <td>Camper</td>
        <td>30 day</td>
        <td>Total</td>
      </tr>
    );
  }
});

module.exports = LeaderRecord;

"use strict";

var React = require('react');

/**
 * Represents the individual camper records.
 */
var LeaderRecord = React.createClass({
  propTypes: {
    camper: React.PropTypes.object.isRequired,
    rank: React.PropTypes.number.isRequired
  },

  render: function render() {
    return (
      <tr>
        <td>{this.props.rank + 1}</td>
        <td>
          <img src={this.props.camper.img} className="img-rounded"/>
          {" "} {this.props.camper.username}
        </td>
        <td>{this.props.camper.recent}</td>
        <td>{this.props.camper.alltime}</td>
      </tr>
    );
  }
});

module.exports = LeaderRecord;

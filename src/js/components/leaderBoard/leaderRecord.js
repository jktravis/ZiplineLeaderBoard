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
        <td className="profile">
          <a href={"http://www.freecodecamp.com/" + this.props.camper.username}
             target="_blank">
            <img src={this.props.camper.img} className="img-rounded"/>
          </a>
          {" "}
          <a href={"http://www.freecodecamp.com/" + this.props.camper.username}
             target="_blank">
            {" "} {this.props.camper.username}
           </a>
        </td>
        <td>{this.props.camper.recent.toLocaleString()}</td>
        <td>{this.props.camper.alltime.toLocaleString()}</td>
      </tr>
    );
  }
});

module.exports = LeaderRecord;

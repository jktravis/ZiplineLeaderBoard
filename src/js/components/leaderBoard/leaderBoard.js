"use strict";
var React = require('react');
var LeaderList = require('./leaderList');
var ListTypes = require('../../constants/listTypes');

/**
 * View controller. Contains the wrapper and all the data for the LeaderBoard component.
 */
var LeaderBoard = React.createClass({
  getInitialState: function getInitialState() {
    this.getCampers(ListTypes.RECENT);
    return {
      campers: []
    };
  },

  getCampers: function getCampers(listType) {
    var _this = this;
    var url = null;

    if (listType === ListTypes.RECENT) {
      url = ListTypes.RECENT_URL;
    } else if (listType === ListTypes.ALL_TIME) {
      url = ListTypes.ALL_TIME_URL;
    }

    if (url !== null) {
      $.getJSON(url, function (data) {
        _this.setState({campers: data.sort(function (a, b) {
          return b[listType] - a[listType];
        })});
      });
    }
  },

  onSort: function onSort(event) {
    event.preventDefault();
    this.getCampers(event.target.id);
    $('.glyphicon-sort-by-attributes-alt').removeClass('glyphicon-sort-by-attributes-alt');
    $('#' + event.target.id).siblings('.glyphicon').addClass('glyphicon-sort-by-attributes-alt');
  },

  render: function render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <LeaderList campers={this.state.campers} onSort={this.onSort}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeaderBoard;

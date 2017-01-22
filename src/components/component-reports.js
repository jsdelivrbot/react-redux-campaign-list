import React, { Component } from 'react';
import ReportList from '../containers/container-report-list'
import ReportDetails from './component-report-details'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-4 report-component-padding">
          <ReportList />
        </div>
        <div className="col-sm-4 report-details-component-padding">
          <ReportDetails />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Reports from './component-reports'
import Campaigns from './component-campaigns'

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <Campaigns />
        <Reports />
      </div>
    );
  }
}

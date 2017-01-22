import React, { Component } from 'react';
import CampaignList from '../containers/container-campaign-list'
import AddCampaign from '../containers/container-add-campaign'

export default class App extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <AddCampaign />
        <CampaignList />
      </div>
    );
  }
}

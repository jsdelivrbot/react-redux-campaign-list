import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectCampaign } from '../actions/index'

class CampaignList extends Component {

  renderList() {
    return this.props.campaigns.map((campaign => {
      return (
        <a
          href="#"
          key={campaign.id}
          className="list-group-item"
          onClick={() => this.props.selectCampaign(campaign, this.props.reports)}
        >
          {campaign.title}
        </a>
      )
    }))
  }

  render() {
    if (!this.props.campaigns.length) {
      return (
        <div></div>
      );
    }

    return (
      <div className="universal-padding">
        <h5>
          Campaign List has {this.props.campaigns.length} item(s).
        </h5>
        <div className="list-group universal-padding">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    campaigns: state.campaigns,
    activeCampaign: state.activeCampaign,
    reports: state.reports
  }
}

export default connect(mapStateToProps, { selectCampaign })(CampaignList)
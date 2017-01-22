import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddReport from '../containers/container-add-report'

import { selectReport } from '../actions/index'

class CampaignDetail extends Component {
  constructor(props) {
    super(props);

    this.renderReports = this.renderReports.bind(this);
    this.filterReports = this.filterReports.bind(this);
  }

  filterReports() {
    return this.props.reports.filter((report) => {
        return report.campaignId == this.props.activeCampaign.id
      }
    );

  }

  renderReports() {
    if (this.filterReports().length != 0) {
      return this.filterReports().map((report => {
        return (
          <a
            href="#"
            key={report.id}
            className="list-group-item"
            onClick={() => this.props.selectReport(report)}
          >
            {report.title}
          </a>
        )
      }))
    }
  }

  render() {
    if (!this.props.activeCampaign.id) {
      return (<div></div>);
    }

    return (
      <div>
        <AddReport />
        <div className="universal-padding">
          <h5>
            Campaign "{this.props.activeCampaign.title}" has {this.filterReports().length}.
          </h5>

          <div className="list-group universal-padding">
            {this.renderReports()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeCampaign: state.activeCampaign,
    reports: state.reports
  }
}

export default connect(mapStateToProps, { selectReport })(CampaignDetail)
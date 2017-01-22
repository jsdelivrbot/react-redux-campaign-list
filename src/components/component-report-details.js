import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReportDetails extends Component {
  render() {
    if (!this.props.report.id) {
      return (
        <div></div>
      );
    }

    return (
      <div className="universal-padding">
        <h5>
          Details
        </h5>
        <div className="list-group universal-padding">
          <div className="list-group-item">Tilte: {this.props.report.title} </div>
          <div className="list-group-item">Id: {this.props.report.id} </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    report: state.activeReport,
  }
}

export default connect(mapStateToProps)(ReportDetails)
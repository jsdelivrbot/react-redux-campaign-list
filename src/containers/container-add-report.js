import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addReport } from '../actions/index'

class AddReport extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.addReport(this.state.term, this.props.selectedCampaign);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="universal-padding">
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            required="true"
            type="text"
            placeholder="Add new Report"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
          <button type="submit" className="btn btn-success"> Add Report! </button>
        </span>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    campaigns: state.campaigns,
    activeCampaign: state.activeCampaign,
    selectedCampaign: state.campaigns[state.activeCampaign.id - 1]
  }
}

export default connect(mapStateToProps, { addReport })(AddReport)
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addCampaign } from '../actions/index'

class AddCampaign extends Component {
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
    this.props.addCampaign(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="universal-padding">
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            required="true"
            type="text"
            placeholder="Add new Campaign"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-success"> Add Campaign! </button>
          </span>
        </form>
      </div>
    )
  }
}

export default connect(null, { addCampaign })(AddCampaign)
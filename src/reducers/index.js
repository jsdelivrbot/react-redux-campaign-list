import { combineReducers } from 'redux';

import CampaignsReducer from './reducer-add-campaign'
import ReportsReducer from './reducer-add-report'
import ActiveCampaignReducer from './reducer-campaign-selected'
import ActiveReportReducer from './reducer-report-selected'

const rootReducer = combineReducers({
  activeCampaign : ActiveCampaignReducer,
  activeReport : ActiveReportReducer,
  campaigns : CampaignsReducer,
  reports : ReportsReducer,
});

export default rootReducer;

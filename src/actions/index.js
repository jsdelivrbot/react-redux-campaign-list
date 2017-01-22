export const CAMPAIGN_SELECTED = 'CAMPAIGN_SELECTED';
export const REPORT_SELECTED = 'REPORT_SELECTED';
export const ADD_CAMPAIGN = 'ADD_CAMPAIGN';
export const ADD_REPORT = 'ADD_REPORT';

let campaignId = 1;
let reportId = 1;

export function selectCampaign(campaign, reports) {
  return {
    type: CAMPAIGN_SELECTED,
    payload: { campaign, reports }
  };
}

export function selectReport(report) {
  return {
    type: REPORT_SELECTED,
    payload: report
  };
}

export function addCampaign(text) {
  return {
    type: ADD_CAMPAIGN,
    payload: text,
    id: campaignId++
  };
}

export function addReport(text, campaign) {
  return {
    type: ADD_REPORT,
    payload: { title: text, campaign },
    id: reportId++,
  };
}



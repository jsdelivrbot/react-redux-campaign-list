import { CAMPAIGN_SELECTED } from '../actions/index'

const INITIAL_STATE = { activeCampaignId: null, activeCampaignTitle: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CAMPAIGN_SELECTED:
      return {
        id: action.payload.campaign.id,
        title: action.payload.campaign.title,
      }
  }
  return state
}
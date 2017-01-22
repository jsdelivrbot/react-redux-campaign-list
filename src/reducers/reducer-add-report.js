import { ADD_REPORT } from '../actions/index'

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_REPORT:
      return [...state,
        {
          campaignId: action.payload.campaign.id,
          id: action.id,
          title: action.payload.title
        }
      ];
    default :
      return state
  }
}
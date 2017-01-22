import { ADD_CAMPAIGN } from '../actions/index'
const INITIAL_STATE = { id: null, title: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CAMPAIGN:
      return [
        ...state,
        {
          id: action.id,
          title: action.payload,
        }
      ];
    default :
      return state
  }
}
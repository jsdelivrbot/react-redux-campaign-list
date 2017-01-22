import { REPORT_SELECTED } from '../actions/index'

const INITIAL_STATE = { title: null, id: null };

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case REPORT_SELECTED:
      return {
        title: action.payload.title,
        id: action.payload.id
      }
  }
  return state
}
const {
    LINE_LIST_REQUEST,
    LINE_LIST_SUCCESS,
    LINE_LIST_FAIL,
    LINE_DETAILS_REQUEST,
    LINE_DETAILS_SUCCESS,
    LINE_DETAILS_FAIL,
} = require('../constants/lineConstants') 

export const lineListReducer = (
    state = { loading: true, lines: [] },
    action
) => {
    switch (action.type) {
        case LINE_LIST_REQUEST:
            return { loading: true } 
        case LINE_LIST_SUCCESS:
            return { loading: false, lines: action.payload } 
        case LINE_LIST_FAIL:
            return { loading: false, error: action.payload } 
        default:
            return state 
    }
} 

export const lineDetailsReducer = (
    state = { line: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case LINE_DETAILS_REQUEST:
        return { loading: true } 
      case LINE_DETAILS_SUCCESS:
        return { loading: false, line: action.payload } 
      case LINE_DETAILS_FAIL:
        return { loading: false, error: action.payload } 
      default:
        return state 
    }
  } 
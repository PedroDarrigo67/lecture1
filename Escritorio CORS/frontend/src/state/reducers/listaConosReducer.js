import {
  CLEAN_ERRMSG_LIST,
  FETCH_LIST_FULFILL,
  FETCH_LIST_PENDING,
  FETCH_LIST_REJECT,
} from "../actions/constants";

const initialState = {
  isFetching: false,
  entity: null,
  fetchListErrorMessage: null,
  currentEntity: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_FULFILL:
      return { ...state, isFetching: false, entity: action.payload };
    case FETCH_LIST_PENDING:
      return { ...state, isFetching: true, entity: null };
    case FETCH_LIST_REJECT:
      return {
        ...state,
        isFetching: false,
        fetchListErrorMessage: action.payload,
      };
    case CLEAN_ERRMSG_LIST:
      return {...state, fetchListErrorMessage: null };
    default:
      return state;
  }

};

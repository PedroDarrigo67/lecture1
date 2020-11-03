import {
  CLEAN_ERRMSG_LIST,
  FETCH_LIST_FULFILL,
  FETCH_LIST_PENDING,
  FETCH_LIST_REJECT,
} from "../actions/constants";

const initialState = {
  isFetching: false,
  isFetchingCentral: false,
  entities: [],
  fetchListErrorMessage: null,
  fetchCentralErrorMessage: null,
  currentEntity: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_FULFILL:
      return { ...state, isFetching: false, entities: [action.payload] };
    case FETCH_LIST_PENDING:
      return { ...state, isFetching: true};
    case FETCH_LIST_REJECT:
      return {
        ...state,
        isFetching: false,
        fetchListErrorMessage: action.payload,
      };
    case CLEAN_ERRMSG_LIST:
      return { ...state, fetchListErrorMessage: null };
    default:
      return state;
  }
};

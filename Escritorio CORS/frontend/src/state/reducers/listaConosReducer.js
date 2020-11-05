import {
  CLEAN_ERRMSG_LIST,
  FETCH_CONO_FULFILL,
  FETCH_CONO_PENDING,
  FETCH_CONO_REJECT,
  FETCH_LIST_FULFILL,
  FETCH_LIST_PENDING,
  FETCH_LIST_REJECT,
} from "../actions/constants";

const initialState = {
  isFetching: false,
  isGetting: false,
  currentEntity: [],
  entities: null,
  fetchListErrorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_FULFILL:
      return Object.assign({}, state, {entities: [action.payload]})
      //{ ...state, isFetching: false, entities: [...state.entities, action.payload] };
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

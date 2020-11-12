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
  currentEntity: null,
  entities: [],
  fetchListErrorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_FULFILL:
      return Object.assign({}, state, {entities: [action.payload]})
    case FETCH_LIST_PENDING:
      return { ...state, isFetching: true};
    case FETCH_LIST_REJECT:
      return {
        ...state,
        isFetching: false,
        fetchListErrorMessage: action.payload,
      };
      case FETCH_CONO_FULFILL:
        return {...state, isGetting: false, currentEntity: action.payload}
      case FETCH_CONO_PENDING:
        return { ...state, isGetting: true };
      case FETCH_CONO_REJECT:
        return {
          ...state,
          isGetting: false,
          fetchConoErrorMessage: action.payload,
        };
    case CLEAN_ERRMSG_LIST:
      return { ...state, fetchListErrorMessage: null };
    default:
      return state;
  }
};

import {
  CLEAN_ERRMSG_LIST,
  FETCH_CONO_FULFILL,
  FETCH_CONO_PENDING,
  FETCH_CONO_REJECT,
  FETCH_LIST_FULFILL,
  FETCH_LIST_PENDING,
  FETCH_LIST_REJECT,
} from "../actions/constants";

let nombreCentral = window.centralesInfo.map(
  (tenerNombre) => tenerNombre.nombre
);

const initialState = {
  isFetching: false,
  isGetting: false,
  currentCono: null,
  entities: {
    nombres: nombreCentral,
    isFetching: false,
    fetchListErrorMessage: null,
    conos: [],
  },
  fetchListErrorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_FULFILL:
      return {
        ...state,
        entities: {
          nombres: nombreCentral,
          isFetching: false,
          fetchListErrorMessage: null,
          conos: [...state.entities.conos, action.payload],
        },
      };
    case FETCH_LIST_PENDING:
      return {
        ...state,
        isFetching: true,
        entities: {
          nombres: null,
          isFetching: true,
          fetchListErrorMessage: null,
          conos: [],
        },
      };
    case FETCH_LIST_REJECT:
      return {
        ...state,
        isFetching: false,
        fetchListErrorMessage: action.payload,
      };
    case FETCH_CONO_FULFILL:
      return {
        ...state,
        currentCono: action.payload,
        isFetching: false,
      };
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

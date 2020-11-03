import { fetchNoteListAPI } from "../../api/notelist/notelistAPI";
import {
  CLEAN_ERRMSG_LIST,
  FETCH_LIST_FULFILL,
  FETCH_LIST_PENDING,
  FETCH_LIST_REJECT,
} from "./constants";

export const fetchList = (ip, central) => async (dispatch) => {
  dispatch({ type: FETCH_LIST_PENDING });
  try {
    let res = await fetchNoteListAPI(ip, central);
    dispatch({ type: FETCH_LIST_FULFILL, payload: res });
    dispatch({ type: FETCH_LIST_REJECT, payload: res.message });
  } catch (error) {
    dispatch({ type: FETCH_LIST_REJECT, payload: error.message });
  }
};

export const cleanErrorMsgList = () => {
  return { type: CLEAN_ERRMSG_LIST };
};

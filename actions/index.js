import axios from 'axios';

export const set_info = (text) => async dispatch => {
  const response = { data: text}
  dispatch({ type: "SET_INFO", payload: response.data });
}

export const set_info_not_persisted = (text) => async dispatch => {
  const response = { data: text}
  dispatch({ type: "SET_INFO_NOT_PERSISTED", payload: response.data });
}

import { combineReducers } from 'redux';

const info = (state = '', action) => {
  switch (action.type) {
    case "SET_INFO":
      return action.payload;
    default:
      return state;
  }
};

const info_not_persisted = (state = '', action) => {
  switch (action.type) {
    case "SET_INFO_NOT_PERSISTED":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
 info,
 info_not_persisted
});

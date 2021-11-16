import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from "./appTypes";

const initialState = {
  loading: false,
  alert: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: "",
      };
    default:
      return state;
  }
};

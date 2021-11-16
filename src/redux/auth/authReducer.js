import { LOGIN, LOGOUT } from "./authTypes";

const initialState = {
  token: null,
  username: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: action.payload,
        username: action.username,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        token: null,
        username: "",
      };
    }
    default:
      return state;
  }
};

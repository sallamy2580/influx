import { AUTHENTICATE, DEAUTHENTICATE } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const authReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case AUTHENTICATE:
      return { ...state, token: action.payload };
    case DEAUTHENTICATE:
      return { token: null };
    default:
      return state;
  }
};

export default authReducer;

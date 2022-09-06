import { FOO } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";
const reducer = (state = { foo: "" }, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case FOO:
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export default reducer;

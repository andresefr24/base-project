import produce from "immer";

import { Types } from "./actions";

export const INITIAL_STATE = {};

export default function templateReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, draft => {
    switch (type) {
      case Types.TEMPLATE_ACTION: {
        break;
      }
      default:
    }
  });
}

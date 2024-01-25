// @flow

import { GET_CARD_INTENT } from "./ActionTypes";

export function getCardIntentRequest(payload, responseCallback) {
  return {
    responseCallback,
    payload,
    type: GET_CARD_INTENT.REQUEST,
  };
}

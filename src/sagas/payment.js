import { take, call, fork } from "redux-saga/effects";
import _ from "lodash";
import { GET_CARD_INTENT } from "../actions/ActionTypes";
import { SAGA_ALERT_TIMEOUT, strings } from "../constants";
import {
  GET_CARD_INTENT as GET_CARD_INTENT_URL,
  callRequest,
} from "../config/WebService";
import ApiSauce from "../services/ApiSauce";
import Util from "../services/Util";

function alert(message, type = "error") {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* getCardIntent() {
  while (true) {
    const { payload, responseCallback } = yield take(GET_CARD_INTENT.REQUEST);

    try {
      const response = yield call(
        callRequest,
        GET_CARD_INTENT_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response, null);
      } else {
        if (responseCallback) responseCallback(false, null);
        alert(response.message || strings.SOMETHING_WENT_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

export default function* root() {
  yield fork(getCardIntent);
}

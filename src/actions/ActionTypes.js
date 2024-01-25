// @flow
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const CANCEL = "CANCEL";
const FAILURE = "FAILURE";

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach((type) => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const NETWORK_INFO = "NETWORK_INFO";
export const USER_UPLOAD_LOGO = createRequestTypes("GET_VEHICLES");
export const SELECT_BOOKING_VEHICLE = "SELECT_BOOKING_VEHICLE";
export const CHANGE_BOOKING_TAB = "CHANGE_BOOKING_TAB";
export const GET_VEHICLES = createRequestTypes("GET_VEHICLES");
export const GET_TEAM_MEMBERS = createRequestTypes("GET_TEAM_MEMBERS");
export const GET_IN_TOUCH = createRequestTypes("GET_IN_TOUCH");
export const SUBSCRIPTION = createRequestTypes("SUBSCRIPTION");
export const BOOK_APPOINTMENT = createRequestTypes("BOOK_APPOINTMENT");
export const GET_CARD_INTENT = createRequestTypes("GET_CARD_INTENT");
export const GET_DOCTOR_SUBMITTED_DOCUMENTS = createRequestTypes(
  "GET_DOCTOR_SUBMITTED_DOCUMENTS"
);
export const SUBMITE_DOCS_TO_DOCTOR = createRequestTypes(
  "SUBMITE_DOCS_TO_DOCTOR"
);

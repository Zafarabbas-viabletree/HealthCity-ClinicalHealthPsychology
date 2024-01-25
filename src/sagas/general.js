import { take, put, call, fork } from "redux-saga/effects";
import moment from "moment";
import { SAGA_ALERT_TIMEOUT, strings, WEBSITE_SLUG } from "../constants";
import {
  GET_VEHICLES,
  GET_TEAM_MEMBERS,
  BOOK_APPOINTMENT,
  GET_IN_TOUCH,
  SUBSCRIPTION,
  GET_DOCTOR_SUBMITTED_DOCUMENTS,
  SUBMITE_DOCS_TO_DOCTOR,
} from "../actions/ActionTypes";
import { getTeamMembersSuccess } from "../actions/GeneralActions";
import {
  GET_VEHICLES as GET_VEHICLES_URL,
  GET_TEAM_MEMBERS as GET_TEAM_MEMBERS_URL,
  BOOK_APPOINTMENT as BOOK_APPOINTMENT_URL,
  GET_IN_TOUCH as GET_IN_TOUCH_URL,
  SUBSCRIPTION as SUBSCRIPTION_URL,
  GET_DOCTOR_SUBMITTED_DOCUMENTS as GET_DOCTOR_SUBMITTED_DOCUMENTS_URL,
  SUBMITE_DOCS_TO_DOCTOR as SUBMITE_DOCS_TO_DOCTOR_URL,
  callRequest,
} from "../config/WebService";
import ApiSauce from "../services/ApiSauce";
import Util from "../services/Util";
import { getManipulatedTeamList } from "../helpers/dataHelper";

const dummyData = {
  files: [
    "https://admin-staging.healthcity.org.uk/storage/bookings/uvDRMEff2Q.docx",
    "https://admin-staging.healthcity.org.uk/storage/bookings/XnvCk3claP.pdf",
    "https://admin-staging.healthcity.org.uk/storage/bookings/XnvCk3claP.pdf",
    "https://admin-staging.healthcity.org.uk/storage/bookings/XnvCk3claP.pdf",
    "https://admin-staging.healthcity.org.uk/storage/bookings/XnvCk3claP.pdf",
    "https://admin-staging.healthcity.org.uk/storage/bookings/XnvCk3claP.pdf",
    "https://admin-staging.healthcity.org.uk/storage/bookings/XnvCk3claP.pdf",
    "https://admin-staging.healthcity.org.uk/storage/bookings/XnvCk3claP.pdf",
    "https://admin-staging.healthcity.org.uk/storage/bookings/XnvCk3claP.pdf",
  ],
  message: "Hello, Please fill this file and submit it back. Thanks",
  bookingDetails: {
    name: "Zain Abbas",
    bookingNumber: "EWJ0U2BDGU",
    dateTime: moment().toISOString(),
  },
};

function alert(message, type = "error") {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* getVehicles() {
  while (true) {
    const { responseCallback } = yield take(GET_VEHICLES.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_VEHICLES_URL,
        {},
        "",
        {},
        ApiSauce
      );

      if (response) {
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null);
        alert(strings.SOMETHING_WENT_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* getTeamMembers() {
  while (true) {
    const { responseCallback } = yield take(GET_TEAM_MEMBERS.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_TEAM_MEMBERS_URL,
        { slug: WEBSITE_SLUG },
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        yield put(getTeamMembersSuccess(getManipulatedTeamList(response.data)));

        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null);
        alert(strings.SOMETHING_WENT_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* bookAppointment() {
  while (true) {
    const { payload, responseCallback } = yield take(BOOK_APPOINTMENT.REQUEST);
    try {
      const response = yield call(
        callRequest,
        BOOK_APPOINTMENT_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response, null);
      } else {
        if (responseCallback) responseCallback(null);
        alert(response.message || strings.SOMETHING_WENT_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* getInTouch() {
  while (true) {
    const { payload, responseCallback } = yield take(GET_IN_TOUCH.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_IN_TOUCH_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null);
        alert(response.message);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* subscriptionRequest() {
  while (true) {
    const { payload, responseCallback } = yield take(SUBSCRIPTION.REQUEST);
    try {
      const response = yield call(
        callRequest,
        SUBSCRIPTION_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null);
        alert(response.message);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* getDoctorSubmittedDocuments() {
  while (true) {
    const { payload, responseCallback } = yield take(
      GET_DOCTOR_SUBMITTED_DOCUMENTS.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        GET_DOCTOR_SUBMITTED_DOCUMENTS_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response, null);
      } else {
        if (responseCallback) responseCallback(null);
        alert(response.message);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}

function* submitDocToDoctor() {
  while (true) {
    const { payload, responseCallback } = yield take(
      SUBMITE_DOCS_TO_DOCTOR.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        SUBMITE_DOCS_TO_DOCTOR_URL,
        payload,
        "",
        {},
        ApiSauce
      );

      if (response.status) {
        if (responseCallback) responseCallback(response, null);
      } else {
        if (responseCallback) responseCallback(null);
        alert(response.message);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
export default function* root() {
  yield fork(getVehicles);
  yield fork(getTeamMembers);
  yield fork(bookAppointment);
  yield fork(getInTouch);
  yield fork(subscriptionRequest);
  yield fork(getDoctorSubmittedDocuments);
  yield fork(submitDocToDoctor);
}

import _ from "lodash";
import {
  ANXIETY_TEXT,
  DEPRESSION_LOW_MOOD_TEXT,
  QUESTIONAIRE_ONE,
  QUESTIONAIRE_THREE,
  QUESTIONAIRE_TWO,
  ROUTES,
} from "../constants";
import {
  PREMIUM_SERVICES_SLUG,
  QUALIFIED_SERVICES_SLUG,
  TRAINEE_SERVICES_SLUG,
} from "../pages/BookingForm/BookingFormController";
import DataHandler from "../services/DataHandler";
import { getCardIntentRequest } from "../actions/PaymentActions";
import { Images } from "../theme";
import { text } from "@fortawesome/fontawesome-svg-core";
import { BASE_URL, UPLOAD_FILES } from "../config/WebService";
import {
  faCertificate,
  faGraduationCap,
  faSortAmountUpAlt,
} from "@fortawesome/free-solid-svg-icons";

const getManipulatedTeamList = (data) => {
  const finalData = [];

  data.forEach((element) => {
    finalData.push({
      cv: element.cv,
      id: element.id,
      name: element.name,
      titles: element.titles,
      description: element.description,
      profileImage: element.profile_image,
    });
  });

  return finalData;
};

const getServiceImage = (serviceName) => {
  let img = faGraduationCap;
  if (serviceName === TRAINEE_SERVICES_SLUG) {
    img = faGraduationCap;
  }

  if (serviceName === PREMIUM_SERVICES_SLUG) {
    img = faSortAmountUpAlt;
  }

  if (serviceName === QUALIFIED_SERVICES_SLUG) {
    img = faCertificate;
  }

  return img;
};

const getQuestionnaireDataById = (questionnairId) => {
  let finalData = null;

  if (questionnairId == 1) {
    finalData = _.cloneDeep(QUESTIONAIRE_ONE);
  } else if (questionnairId == 2) {
    finalData = _.cloneDeep(QUESTIONAIRE_TWO);
  } else if (questionnairId == 3) {
    finalData = _.cloneDeep(QUESTIONAIRE_THREE);
  }

  return finalData;
};

const getQuestionnaireResultHeadingById = (questionnairId) => {
  let resultHead;
  switch (questionnairId) {
    case "1":
      resultHead = `Would You Like To Complete A Mood Questionnaire (${DEPRESSION_LOW_MOOD_TEXT}) To See How You Are Feeling?`;
      break;

    case "2":
      resultHead = `Would You Like To Complete A Mood Questionnaire (${ANXIETY_TEXT}) To See How You Are Feeling?`;
      break;
    default:
  }
  return resultHead;
};

const goToLandingPage = (historyInstance) => {
  historyInstance.push("/");
};

const getCardIntentRequestHelper = (payload, cb) => {
  DataHandler.getStore().dispatch(
    getCardIntentRequest(payload, (response) => {
      cb(response);
    })
  );
};

const uploadFiles = async (files) => {
  const finalResponse = {
    status: false,
    message: "Something went wrong",
  };
  const formData = new FormData();
  files.forEach((element) => {
    formData.append("documents[]", element);
  });

  try {
    const responseNew = await fetch(`${BASE_URL}${UPLOAD_FILES.route}`, {
      method: "POST",
      body: formData,
    });

    const responseJson = await responseNew.json();
    console.log("Success:", responseJson);

    return {
      ...finalResponse,
      ...responseJson,
    };
  } catch (err) {
    return {
      ...finalResponse,
      ...err,
    };
  }
};

export {
  getManipulatedTeamList,
  getServiceImage,
  getQuestionnaireDataById,
  goToLandingPage,
  getCardIntentRequestHelper,
  getQuestionnaireResultHeadingById,
  uploadFiles,
};

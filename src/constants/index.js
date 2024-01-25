export const SAGA_ALERT_TIMEOUT = 500;
export const IMAGE_MAX_WIDTH = 500;
export const IMAGE_MAX_HEIGHT = 500;
export const MILES_LIMIT = 50;

// URLS
// export const URL_WEBSITE = "https://www.kiffgo.com";
export const WEBSITE_SLUG = "clinical-health-psychology";

//TeamMemberCount

export const TEAM_MEMBER_COUNT = 3;

export const PRIVACY_POLICY = "privacy-policy";
export const TWIN_BRAIN_WEBSITE = "https://www.twinbrain.org/";
export const BOOK_SHOP_WEBSITE = "http://www.shop.healthbj-uk.org/";
export const CBT_WEBSITE = "https://cbt.healthbj-uk.org";
export const EAP_WEBSITE = "https://eap.healthbj-uk.org/";
export const COUNSELLING_WEBSITE = "https://counselling.healthbj-uk.org/";
export const COUPLE_THERAPY_WEBSITE = "https://coupletherapy.healthbj-uk.org/";
export const CLINICAL_PSYCHOLOGY_WEBSITE =
  "https://clinicalpsychology.healthbj-uk.org/";
export const PSYCHOLOGY_ASSESSMENT_WEBSITE =
  "https://psychassessment.twinbrain.org/";

// Array of week

export const WEEK = {
  SUNDAY: "sunday",
  MONDAY: "monday",
  TUESDAY: "tuesday",
  WEDNESDAY: "wednesday",
  THURSDAY: "thursday",
  FRIDAY: "friday",
  SATURDAY: "saturday",
};

export const TESTIMONIALS = [
  {
    id: 1,
    text:
      "Thank you for helping my daughter Samantha to go adolescence, to recover from the unsuccessful attempts to find friends and the bad companies. Through therapeutic support, my daughter and I trust and support each other. Samantha has friends and they have a very good relationship, my daughter, do not use and does not involve in illicit affairs.",
    reivewedBy: "- Melanie Portman, housewife",
  },
  {
    id: 2,
    text:
      "My wife wrote down my leadership courses. I treated them fairly skeptical. But I must admit, I liked the methods and attitude of Healthcity. I can say that has left some children's fears and complexes and now I can be more confident and efficient at home and at work.",
    reivewedBy: "- George Griffin, insurance manager",
  },
  {
    id: 3,
    text:
      "Our family wants to thank Dr. Smith for their concern and support. He helped us to restore normal life after moving and changing jobs. Children could join the new team at the school and to make friends. We could hardly used this time to live so quietly and smoothly without his help.",
    reivewedBy: "- Robert and Alicia Jones",
  },
  {
    id: 4,
    text:
      "Thank you for helping my daughter Samantha to go adolescence, to recover from the unsuccessful attempts to find friends and the bad companies. Through therapeutic support, my daughter and I trust and support each other. Samantha has friends and they have a very good relationship, my daughter, do not use and does not involve in illicit affairs.",
    reivewedBy: "- Melanie Portman, housewife",
  },
  {
    id: 5,
    text:
      "My wife wrote down my leadership courses. I treated them fairly skeptical. But I must admit, I liked the methods and attitude of Healthcity. I can say that has left some children's fears and complexes and now I can be more confident and efficient at home and at work.",
    reivewedBy: "- George Griffin, insurance manager",
  },
  {
    id: 6,
    text:
      "Our family wants to thank Dr. Smith for their concern and support. He helped us to restore normal life after moving and changing jobs. Children could join the new team at the school and to make friends. We could hardly used this time to live so quietly and smoothly without his help.",
    reivewedBy: "- Robert and Alicia Jones",
  },
];

// date time formats
export const DATE_FORMAT1 = "Do MMMM YYYY, HH:mm";
export const DATE_FORMAT2 = "DD/MM/YYYY";
export const DATE_TIME_FORMAT1 = "ddd, MMMM DD, YYYY  hh:mm A";
export const DATE_TIME_FORMAT2 = "YYYY-MM-DD HH:mm:ss";

export const TIME_FORMAT1 = "HH:mm";
export const TIME_FORMAT2 = "hh:mm A";

// Messages

export const DEV_ENV = "dev";
export const PROD_ENV = "prod";

// Message types
export const MESSAGE_TYPES = {
  INFO: "info",
  ERROR: "error",
  SUCCESS: "success",
};

// File Types
export const FILE_TYPES = { VIDEO: "video", IMAGE: "image", AUDIO: "audi" };

export const ROUTES = {
  HOME: "/",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  ISSUEWESOLVE: "/issues-we-solve",
  KEEP_YOU_SAVE: "/keep-you-save",
  HOW_TO_PAY: "/how-to-pay",
  CHARITIES: "/charities-community",
  PAGE_NOT_FOUND: "/PageNotFound",
  SERVICES: "/services",
  ABOUT_US: "/about-us",
  TEAM: "/team",
  CONTACT: "/contact",
  BOOKING: "/booking",
  QUESTIONNAIRE_RESULT: "/questionnaire-result",
  QUESTIONNAIRE: "/questionnaire",
  FREE_THERAPY: "/free-low-cost-or-discounted-therapy-service",
  PREMIUM_SERVICE: "/premium-service",
  EXTERNAL_LINKS: "/external-links",
  TWIN_BRAIN: "/twin-brain-service",
  RESOURCE_HUB_X: "/resource-hub-x",
  PATIENT_FORM: "/patient-form",
  GIFT_VOUCHERS: "/gift-vouchers",
};

export const EMAIL_REGEX =
  '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';

export const strings = {
  CONTACT_FORM_SUCCESS_MESSAGE:
    "We've received your query and we will contact you soon",
  NOTIFY_SUCCESS_MESSAGE:
    "We'll inform you by email once the page will get ready",
  EMAIL_IS_REQUIRED: "Email is required",
  PRIVACY_POLICY: "Privacy Policy",
  INVALID_NUMBER: "Invalid number",
  INVALID_EMAIL_ERROR: "Invalid email",
  INVALID_PHONE_NUMBER: "Invalid phone number",
  INVALID_FIELD: "Invalid data",
  NUMBER_IS_REQUIRED: "Number is required",
  NAME_IS_REQUIRED: "Name is required",
  INVALID_EMAIL: "Invalid email",
  INVALID_ADDRESS: "Invalid address",
  EMAIL: "E-mail",
  SOMETHING_WENT_WRONG: "Something went wrong",
  NUMBER: "Number:",
  CANCEL: "Cancel",
  ARE_U_SURE: "Are you sure?",
  INTERNET_ERROR: "Please connect to the working internet",
  SESSION_EXPIRED_ERROR: "Session expired, Please login again",
  SOMETHING_WRONG: "Something went wrong",
  FAILED_TO_FETCH: "Failed to fetch, try to refresh the page",
  BANK_DETAILS: {
    name: "HSBC",
    sortCode: "40 07 04",
    accountNumber: "71828835",
    accountName: "Enaikidigha Ltd (trading as Healthcity)",
    paymentReference:
      "Your surname and date you received the service e.g. J. Kane23/06/18.)",
    IBAN: "GB83HBUK40070471828835",
    SWIFT: "HBUKGB4142V",
  },
  PHONE_IS_REQUIRED: "Phone is required",
  ADDRESS_IS_REQUIRED: "Address is required",
  TIME_SLOT_IS_REQUIRED: "Time slot is required",
  IS_REQUIRED_ERROR: "This field is required",
  COMPANY_IS_REQUIRED: "Company name is required",
  INVALID_FULLNAME_ERROR: "Invalid full name",
  PLEASE_SELECT_SESSION_TYPE: "Please select session type",
  PLEASE_SELECT_PAYMENT_TYPE: "Please select payment type",
  PLEASE_ADD_COMPANY_NAME: "Invalid company name",
  QUESTIONNAIR_FORM_INVALID: "Please answer all above questions to proceed",
  DEFAULT_SUGGESTION:
    "Feel free to fill out the form below to ask any questions about Healthcity or our services and products and we will get back to you ASAP. We will endeavor to signpost you to a suitable provider should we not have the answers to your query.",
};

//questionaire dataset No.1

export const QUESTIONAIRE_ONE = {
  id: 1,
  title: "What Are You Looking For?",
  questions: [
    {
      id: 1,
      question:
        "I have stress, anxiety or other psychological conditions in my personal life, my family life, workplace, employment,  business etc.",
      options: [
        { title: "Yes", value: 1 },
        { title: "No", value: 0 },
      ],
    },
    {
      id: 2,
      question:
        "I have multiple difficulties to address, including childhood and current issues, abuses, bullying, trauma, trust, don’t believe myself, I am worthless, low self-esteem etc.",
      options: [
        { title: "Yes", value: 1 },
        { title: "No", value: 0 },
      ],
    },
    {
      id: 3,
      question: "I need coping techniques to deal with my difficulties.",
      options: [
        { title: "Yes", value: 1 },
        { title: "No", value: 0 },
      ],
    },
    {
      id: 4,
      question:
        " I am not good enough. Or I feel that I am a failure or an embarrassment to myself or to my family.",
      options: [
        { title: "Yes", value: 1 },
        { title: "No", value: 0 },
      ],
    },
    {
      id: 5,
      question:
        " I can’t stop thinking about what is bothering me. Or my mind keeps running around a million miles in my head or my thinking goes round like a vicious cycle.",
      options: [
        { title: "Yes", value: 1 },
        { title: "No", value: 0 },
      ],
    },

    {
      id: 6,
      question:
        "I have a difficulty or a conflict in my relationship with someone that I want to explore deeper. Or I am struggling to deal with a major change in my life, bereavement or grief and loss. Or I am finding it difficult to start or keep a good relationship.",
      options: [
        { title: "Yes", value: 1 },
        { title: "No", value: 0 },
      ],
    },

    {
      id: 7,
      question:
        "I want a safe space to talk how I am feeling and thinking about my difficulty.",
      options: [
        { title: "Yes", value: 1 },
        { title: "No", value: 0 },
      ],
    },
  ],
  results: [
    {
      min: 0,
      max: 0,
      description: "Normal",
      detailDesc:
        "If you answered 'Yes'  to question 1, 2 and 3 or if you scored 7  out of 7, you may benefit from clinical or counselling psychology.",
      suggestion:
        "You may also benefit from longer-term therapy with other approaches such as cognitive behavioural therapy (CBT), counselling etc.  The psychologist or therapist will explore more with you during your first session/appointment.",
    },
    {
      min: 1,
      max: 7,
      description: "Mild depression",
      detailDesc:
        "If you answered 'Yes'  to question 1, 2 and 3 or if you scored 7  out of 7, you may benefit from clinical or counselling psychology.",
      suggestion:
        "You may also benefit from longer-term therapy with other approaches such as cognitive behavioural therapy (CBT), counselling etc.  The psychologist or therapist will explore more with you during your first session/appointment.",
    },
  ],
};

//questionaire dataset No.2

export const QUESTIONAIRE_TWO = {
  id: 2,
  title: "Assesses depression / Low Mood (PHQ-9)",
  subTitle:
    "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  questions: [
    {
      id: 1,
      question: "Little interest or pleasure in doing things?",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 2,
      question: "Feeling down, depressed, or hopeless?",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 3,
      question: "Trouble falling or staying asleep, or sleeping too much?",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 4,
      question: "Feeling tired or having little energy?",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 5,
      question: "Poor appetite or overeating?",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 6,
      question:
        "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 7,
      question:
        "Trouble concentrating on things, such as reading the newspaper or watching television?",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 8,
      question:
        "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 9,
      question:
        "Thoughts that you would be better off dead, or of hurting yourself in some way?",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
  ],
  results: [
    {
      min: 0,
      max: 4,
      description: "Normal",
      detailDesc: "You do not have any symptoms for depression",
      suggestion: strings.DEFAULT_SUGGESTION,
    },
    {
      min: 5,
      max: 9,
      description: "Mild depression",
      detailDesc: "You may have Mild depression",
      suggestion: strings.DEFAULT_SUGGESTION,
    },
    {
      min: 10,
      max: 14,
      description: "Moderate depression",
      detailDesc: "You may have Moderate depression",
      suggestion: strings.DEFAULT_SUGGESTION,
    },
    {
      min: 15,
      max: 19,
      description: "Moderately severe depression",
      detailDesc: "You may have Moderately severe depression",
      suggestion:
        "You may benefit from clinical or counselling psychology. You may also benefit from longer term therapy with other approach as such as cognitive behavioural therapy (CBT), counselling etc. The psychologist or therapist will explore more with you during your first session/appointment.",
    },
    {
      min: 20,
      max: 27,
      description: "Severe depression",
      detailDesc: "You may have severe depression",
      suggestion:
        "You may benefit from clinical or counselling psychology. You may also benefit from longer term therapy with other approach as such as cognitive behavioural therapy (CBT), counselling etc. The psychologist or therapist will explore more with you during your first session/appointment.",
    },
  ],
};

//questionaire dataset No.3

export const QUESTIONAIRE_THREE = {
  id: 3,
  title: "Generalised Anxiety Disorder Assessment (GAD-7)",
  subTitle:
    "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  questions: [
    {
      id: 1,
      question: "Feeling nervous, anxious or on edge",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 2,
      question: "Not being able to stop or control worrying",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 3,
      question: "Worrying too much about different things",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 4,
      question: "Trouble relaxing",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 5,
      question: "Being so restless that it's hard to sit still",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 6,
      question: "Becoming easily annoyed or irritable",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
    {
      id: 7,
      question: "Feeling afraid as if something awful might happen",
      options: [
        { title: "Not At All", value: 0 },
        { title: "Several Days", value: 1 },
        { title: "More than half the days", value: 2 },
        { title: "Nearly every day", value: 3 },
      ],
    },
  ],
  results: [
    {
      min: 0,
      max: 5,
      description: "Mild anxiety",
      detailDesc: "You may have Mild anxiety",
      suggestion: strings.DEFAULT_SUGGESTION,
    },
    {
      min: 6,
      max: 10,
      description: "Moderate anxiety",
      detailDesc: "You may have Moderate anxiety",
      suggestion: strings.DEFAULT_SUGGESTION,
    },
    {
      min: 11,
      max: 14,
      description: "Moderately severe anxiety",
      detailDesc: "You may have Moderate severe anxiety",
      suggestion: strings.DEFAULT_SUGGESTION,
    },
    {
      min: 15,
      max: 21,
      description: "Severe anxiety",
      detailDesc: "You may have Severe anxiety",
      suggestion:
        "You may benefit from clinical or counselling psychology. You may also benefit from longer term therapy with other approach as such as cognitive behavioural therapy (CBT), counselling etc. The psychologist or therapist will explore more with you during your first session/appointment.",
    },
  ],
};
export const DEPRESSION_LOW_MOOD_TEXT = "Depression/low mood";
export const ANXIETY_TEXT = "Anxiety";

export const HEADER_HEIGHT = 70;

// @flow
import _ from "lodash";
import moment from "moment";

import { MESSAGE_TYPES, TIME_FORMAT2, ROUTES } from "../constants";
import DataHandler from "../services/DataHandler";
class Util {
  keyExtractor = (item, index) => index.toString();

  /**
   *
   * @param {string} phone
   * @return {string}
   */
  formatPhone = (phone) => {
    return phone;
    return `+${phone}`;
  };

  isValidURL(url) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(http|https|fttp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
  }

  isValidHttpsURL(url) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(https|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    return re.test(url);
  }

  isTimeFormat(time) {
    // eslint-disable-next-line no-useless-escape

    const re = /^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/[0-9]{4} [012]{0,1}[0-9]:[0-6][0-9]$/;
    let bol = re.test(time);
    return bol;
  }

  isEmailValid(email) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
  }
  isPasswordValid(password) {
    return password.length > 5;
  }
  isValidfullname(name) {
    return /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(name);
  }

  spaceNotAllowed(val) {
    // return /^\s*\S+(?:\s+\S+){2}/.test(val);
    // return /(?!^ +$)^.+$/.test(val);
    return /(?=[\w]{1,})[\s\w\W]+/.test(val);
  }

  validCompanyName(val) {
    return /^[a-zA-Z0-9_ ]*$/.test(val);
  }

  capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return "";
  }

  getFormattedDateTime = (date, format) => {
    if (date) return moment(date).format(format);
    return "";
  };

  getDateObjectFromString = (date, format) => {
    if (date) return moment(date, format).toDate();
    return "";
  };
  /* 
  getCurrentUserAccessToken() {
    return DataHandler.getStore().getState().user.data.access_token;
  }*/

  getCurrentAccessToken() {
    let token = DataHandler.getStore().getState().user.data.access_token;
    return token;
  }
  getCurrentRefreshToken() {
    let token = DataHandler.getStore().getState().user.data.refresh_token;

    return token;
  }

  isNumber(val) {
    return /^\d+$/.test(val);
  }

  generateGetParameter(obj) {
    let final = "?";
    for (const key in obj) {
      final = `${final}${key}=${obj[key]}&`;
    }
    final = final.slice(0, -1);
    return final;
  }

  isValidMobileNumber(str) {
    if (!str) return false;
    const isnum = /^\d+$/.test(str);

    if (str.length < 15 && str.length > 9 && isnum) {
      return true;
    }
    return false;
  }

  // async getReq() {
  //   let options = Object.assign({ method: 'POST' });
  //   options.credentials = 'include';
  //   options.headers = {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     dataType: 'json'
  //   };
  //   let data = {};
  //   options.body = JSON.stringify(data);
  //   const response = await fetch(
  //     `https://kiffgo-development.herokuapp.com/b/login-website`,
  //     options
  //   );
  //   const responseJson = await response.json();
  //   return responseJson._csrf;
  // }
  generateGuid() {
    const S4 = () =>
      (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  } // function for getting radians from degrees

  isEven = (n) => n % 2 === 0;

  isOdd = (n) => Math.abs(n % 2) === 1;

  penceToPoundsWithDecimal = (value) =>
    value > 0 ? `£ ${(value / 100).toFixed(2)}` : `£ 0`;

  topAlert = (message, type = MESSAGE_TYPES.SUCCESS) => {
    let title = "";
    if (type === MESSAGE_TYPES.SUCCESS) {
      title = "Success";
    } else if (type === MESSAGE_TYPES.ERROR) {
      title = "Error";
    } else if (type === MESSAGE_TYPES.INFO) {
      title = "Info";
    }
    // this.dmInformAlert(title, message, null, null);
  };

  topAlertError = (message) => {
    this.topAlert(message, MESSAGE_TYPES.ERROR);
  };

  getFormattedDurationFromMins = (duration, format) => {
    if (duration) {
      return moment
        .utc(moment.duration(duration, "minutes").asMilliseconds())
        .format(TIME_FORMAT2);
    }

    return "";
  };

  getFormattedDurationFromHour = (duration, format) => {
    if (duration) {
      return moment
        .utc(moment.duration(duration, "hours").asMilliseconds())
        .format(TIME_FORMAT2);
    }

    return "";
  };

  dmInformAlert = (title, text, confirmButtonText, onConfirmPress) => {
    this.dmConfirmAlert(title, text, confirmButtonText, onConfirmPress, false);
  };

  unitFormat = (value, unit, isSuffix) => {
    if (isSuffix) {
      return `${value} ${unit}`;
    } else {
      return `${unit} ${value}`;
    }
  };

  getMiles(i) {
    if (i) {
      if (i > 90) {
        return Math.round(i * 0.000621371192 * 10) / 10;
      }
      // when value is less than 90 it gived 0 miles so we override that value with 0.1
      return 0.1;
    }

    return 0;
  }

  getCurrentUrl = () => {
    return window.location.origin;
  };

  createStopTrackingUrl = (uniqueUrl) => {
    return `${this.getCurrentUrl()}${ROUTES.PUBLIC_TRACKING}/s/${uniqueUrl}`;
  };

  createJobTrackingUrl = (uniqueUrl) => {
    return `${this.getCurrentUrl()}${ROUTES.PUBLIC_TRACKING}/j/${uniqueUrl}`;
  };

  checkValueExits = (value, defaults = "") => {
    if (value) {
      return value;
    }
    return defaults;
  };
  mmToMeter = (mm) => {
    let result = 0;

    result = mm / 1000;
    result = result.toFixed(2);
    return result + "m";
  };

  getSingularPluralText(quantity, text) {
    return quantity > 1 ? `${text}s` : text;
  }

  getFormattedPhone = (phone) => {
    // const first2Numbers = phone.substring(0, 2);
    // const next4Numbers = phone.substring(2, 6);
    // const remainingNumbers = phone.substring(6, phone.length);
    // return `+${first2Numbers} ${next4Numbers} ${remainingNumbers}`;
    return `+${phone}`;
  };
}

export default new Util();

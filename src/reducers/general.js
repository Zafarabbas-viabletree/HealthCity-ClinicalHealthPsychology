// @flow
import _ from "lodash";
import Immutable from "seamless-immutable";
import { GET_TEAM_MEMBERS, GET_VEHICLES } from "../actions/ActionTypes";
import { MODAL_TYPES } from "../constants";

const defaultModalsState = {};

const initialState = Immutable({
  teamMembersData: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VEHICLES.SUCCESS: {
      return Immutable.merge(state, {
        vehicleTypes: action.data,
      });
    }

    case GET_TEAM_MEMBERS.SUCCESS: {
      return Immutable.merge(state, {
        teamMembersData: action.data,
      });
    }

    default:
      return state;
  }
};

// @flow
import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { css } from "aphrodite";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import { AppStyles, Colors } from "../../../theme";

const RadioSection = (props) => {
  const { onChange, listData } = props;
  return (
    <RadioGroup onChange={onChange}>
      {listData.map((item) => {
        return (
          <ReversedRadioButton
            iconSize={18}
            iconInnerSize={8}
            value={item.value}
            rootColor={Colors.background.borderColor}
            pointColor={Colors.text.primary}
          >
            <div className={css([AppStyles.spaceBetween, AppStyles.flexRow])}>
              <span style={{ color: Colors.black }}>{item.text}</span>
              {item.price && (
                <span style={{ fontWeight: 600, color: Colors.black }}>
                  £{item.price}
                </span>
              )}
            </div>
          </ReversedRadioButton>
        );
      })}
    </RadioGroup>
  );
};

RadioSection.propTypes = {
  listData: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

RadioSection.defaultProps = {};

export default RadioSection;

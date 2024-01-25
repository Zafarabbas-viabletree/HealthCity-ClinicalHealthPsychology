// @flow
import React from "react";
import _ from "lodash";
import { css } from "aphrodite";
import styles from "./ServiceBoxRightStyles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Colors } from "../../theme";
import { NavLink } from "react-router-dom";

export default function ServiceBoxRightView(props) {
  const {
    image,
    title,
    icon,
    description,
    anchorText,
    link,
    externalLink,
  } = props;

  return (
    <div className={`container`}>
      <div className={`serv-img ${css(styles.innerContainer)}`}>
        <LazyLoadImage
          src={image}
          alt={image}
          className={css(styles.servImg)}
          effect="blur"
        />
        {/* <img src={image} className={css(styles.servImg)} /> */}
        <div style={{ clear: "right" }}>
          <div className={css(styles.servIconCont)}>
            <img src={icon} className={css(styles.servIcon)} />
          </div>

          <div className={css(styles.servDetailBox)}>
            <h6 className={css(styles.servHeading)}>{title}</h6>
            <p className={css(styles.servDesc)}>
              {description}
              <span>
                {!_.isUndefined(link) && (
                  <NavLink
                    style={{ color: Colors.text.primary, fontWeight: 700 }}
                    to={link}
                  >
                    {anchorText}
                  </NavLink>
                )}
                {!_.isUndefined(externalLink) && (
                  <a
                    href={externalLink}
                    style={{ color: Colors.text.primary, fontWeight: 700 }}
                    target="_blank"
                  >
                    {anchorText}
                  </a>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

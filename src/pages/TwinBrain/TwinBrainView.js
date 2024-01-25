// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./TwinBrainStyles";
import { AppStyles, Images } from "../../theme";
import {
  WebHeader,
  WebFooter,
  UnderDev,
  ContentPageHeroSec,
} from "../../components";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function TwinBrainView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Twin Brain Service | Clinical Or Health Psychology | Healthcity
        </title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Twin Brain Service" />
      <div className={`container my-5`}>
        <UnderDev pageName={"Twin Brain"} />
      </div>
      <WebFooter />
    </div>
  );
}

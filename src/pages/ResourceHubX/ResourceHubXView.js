// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./ResourceHubXStyles";
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

export default function ResourceHubXView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Resource Hub-X | Clinical Or Health Psychology | Healthcity
        </title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Resource Hub-X" />
      <div className={`container my-5`}>
        <UnderDev pageName={"Resource Hub-X"} />
      </div>
      <WebFooter />
    </div>
  );
}

import React from "react";
import { connect } from "react-redux";
import {
  WebHeader,
  WebFooter,
  OurTeamSection,
  QuestionaireListing,
} from "../../components";
import CTABannerSec from "./CTABannerSec";
import CBTSec from "./CBTSec";
import WebHeroSec from "./WebHeroSec";
import TeamSec from "./TeamSec";
import TestimonialSec from "./TestimonialSec";
import BooksPDFSec from "./BooksPDFSec";
import QuestionaireSec from "./QuestionaireSec";
import { Helmet } from "react-helmet";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Clinical Or Health Psychology | Healthcity</title>
          <meta name="description" content="Healthcity | Health is wealth" />
        </Helmet>
        <WebHeader />
        <WebHeroSec />
        <CBTSec />
        <TeamSec />
        <QuestionaireSec />
        <CTABannerSec />
        <TestimonialSec />
        <BooksPDFSec />
        <WebFooter />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(LandingPage);

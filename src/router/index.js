import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ROUTES } from "../constants";
import {
  LandingPage,
  PageNotFound,
  TermsAndConditions,
  PrivacyPolicy,
  Services,
  AboutUs,
  BookingForm,
  Team,
  Contact,
  KeepYouSave,
  HowToPay,
  Charities,
  QuestionnaireResult,
  QuestionnairePage,
  PremiumServices,
  FreeTherapy,
  ExternalLinks,
  TwinBrain,
  ResourceHubX,
  DocumentForm,
  GiftVoucher,
  IssuesWeSolve,
} from "../pages";
import LayoutWrapper from "./LayoutWrapper";
import { ScrollToTop } from "../components";

const NoAuthRoute = ({ ...props }) => {
  return (
    <LayoutWrapper>
      <Route {...props} />
    </LayoutWrapper>
  );
};

class Routers extends React.PureComponent {
  render() {
    const { user } = this.props;
    const repeatedProps = {
      user,
      exact: true,
    };

    return (
      <Router>
        <ScrollToTop />
        <div>
          <Switch>
            <NoAuthRoute
              path={ROUTES.HOME}
              component={LandingPage}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.SERVICES}
              component={Services}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.ABOUT_US}
              component={AboutUs}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.TEAM}
              component={Team}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.CONTACT}
              component={Contact}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.TERMS_AND_CONDITIONS}
              component={TermsAndConditions}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.BOOKING}
              component={BookingForm}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.KEEP_YOU_SAVE}
              component={KeepYouSave}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.CHARITIES}
              component={Charities}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.HOW_TO_PAY}
              component={HowToPay}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={`${ROUTES.QUESTIONNAIRE_RESULT}/:questionnaireId`}
              component={QuestionnaireResult}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={`${ROUTES.QUESTIONNAIRE}/:questionnaireId`}
              component={QuestionnairePage}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PREMIUM_SERVICE}
              component={PremiumServices}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.FREE_THERAPY}
              component={FreeTherapy}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.EXTERNAL_LINKS}
              component={ExternalLinks}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.ISSUEWESOLVE}
              component={IssuesWeSolve}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.TWIN_BRAIN}
              component={TwinBrain}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.RESOURCE_HUB_X}
              component={ResourceHubX}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={`${ROUTES.PATIENT_FORM}/:formId`}
              component={DocumentForm}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.GIFT_VOUCHERS}
              component={GiftVoucher}
              {...repeatedProps}
            />

            {/* Keep this in last always */}
            <NoAuthRoute path={Route.PAGE_NOT_FOUND} component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const actions = {};

export default connect(mapStateToProps, actions)(Routers);

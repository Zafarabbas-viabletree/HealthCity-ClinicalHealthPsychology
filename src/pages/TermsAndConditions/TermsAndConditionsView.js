// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./TermsAndConditionsStyles";
import { AppStyles, Colors } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { Helmet } from "react-helmet";

export default function TermsAndConditionsView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Terms And Conditions| Clinical Or Health Psychology | Healthcity
        </title>
        <meta
          name="description"
          content="Healthcity | We care about your health"
        />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Terms And Conditions" />
      <div className={`my-5 py-3`}>
        <div className={`container`}>
          <div className={`my-4 mb-5`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              BY BOOKING I ACCEPT THE FOLLOWING:
            </h2>
          </div>

          <div className={`my-4 mb-2`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              1.0 Healthcity’S PAYMENTS
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              We offer a number of ways to help you pay for your services with
              Healthcity:
            </p>
          </div>

          <div className={`my-4 mb-3`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              1.1 Self-Funding Clients:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              (a) Bank transfer is our preferred payment method:{" "}
            </p>
            <p className={`mb-3 ${css([AppStyles.weight7, AppStyles.pera18])}`}>
              Bank HSBC, Sort Code: 40 07 04, Account number:71828835. Account
              name: Enaikidigha Ltd (trading as Healthcity).
            </p>
          </div>

          <div className={`my-4 mb-3`}>
            <h2
              className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}
            >
              Payment reference:{" "}
              <span className={css(AppStyles.weight4)}>
                {" "}
                Your initials, surname, and date you received the service e.g.
                J.Kane23/06/16.{" "}
              </span>
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              (b) Paying by Direct Debit: Clients can set up a direct debit
              payment using their bank.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              (c) Paying with debit, credit card, bank or making payments
              involving international currency conversion: Clients can pay via
              <a href="https://www.paypal.com/uk/signin" target="_blank">
                {" "}
                Paypal{" "}
              </a>
              ,{" "}
              <a href="https://gocardless.com/" target="_blank">
                Go Cardless{" "}
              </a>{" "}
              or their bank. They may charge you a small fee, which is in
              addition to the full fee you are paying Healthcity. Please check
              with your card issuer or bank before making a payment.
            </p>
          </div>

          <div className={`my-4 mb-5`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              1.2 Funding by Insurance or Organisation:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              (a) Therapy, Counselling and Wellbeing Services can be paid via
              corporate organizations or all health insurance firms including
              Standard Life, Cigna, AVIVA, AXA PPP, BUPA International,
              PruHealth.
            </p>
            <h2
              className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}
            >
              Note:{" "}
              <span className={css(AppStyles.weight4)}>
                {" "}
                BUPA UK is only accepted by some of our therapists. AXA PPP
                clients need a psychiatric referral first.{" "}
              </span>
            </h2>
          </div>

          <div className={`my-4 mb-3`}>
            <h2
              className={`mb-4 mt-5 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              2.0 PAYMENTS AND CANCELLATION POLICY
            </h2>
            <h2
              className={`mb-3 mt-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              2.1 Payments For Services Are In Advance:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              This can be via any of the payment options offered by Health
              BJ-UK. A receipt will be emailed to you.
            </p>
          </div>

          <div className={`my-3 mb-5`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              2.2 Cancellation Policy:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              (a) Therapy, Counselling or Wellbeing Service: Evidence is that
              regular attendance helps with recovery, so to motivate attendance,
              the full fee will be paid for missed or canceled sessions even
              with advance notice. Also, another client would have benefited
              from the missed or canceled session.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              (b) Other Services: Services booked cannot be canceled, but must
              be paid in full whether used or not. Money is not refundable
              except Healthcity (HC) fails to deliver or provide an
              alternative when it (HC) could not offer the original service
              promised.
            </p>

            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              2.3 Prices/Fees:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              (a) Prices can be changed anytime without notice: This shall not
              affect Bookings previously submitted.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              (b) Fees paid Online during Booking cover:
            </p>
            <ul
              style={{ listStyle: "decimal", paddingLeft: 16 }}
              className={`mb-3 ${css(AppStyles.pera18)}`}
            >
              <li>
                Face to Face appointments where the client comes to the Health
                BJ-UK’s personnel at Canary Wharf UK, London Bridge UK or
                another venue (the UK or overseas) where the Healthcity’s
                personnel is based.
              </li>
              <li>
                Services received Online or via Email, Phone, Text Messaging,
                Postal Letter or Fax.
              </li>
              <li>
                Services received in English language or in a language spoken by
                the Healthcity’s personnel.
              </li>
              <li>
                The client doesn’t mind their full identity known to the Health
                BJ-UK’s personnel.
              </li>
              <li>
                The client wants a Healthcity’s personnel who is of a specific
                gender or who is aware of a specific faith or culture. Note:
                Subject to availability.
              </li>
              <li>
                A session of any service is 50 minutes. Consultation requires a
                double session (so the client pays for 2 sessions).
              </li>
            </ul>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              (c) Fees Paid Online during Booking do not cover extra resource
              required by a client.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              The extra resources will incur a negotiated additional fee to
              reflect the Healthcity’s personnel’s extra resource used by the
              client. You should complete the Online Booking with payment as
              normal and then contact Healthcity to negotiate the cost of the
              extra resource. If you and Healthcity can’t reach an agreeable
              cost for the extra resource, then Healthcity will cancel your
              booking with a full refund of the fee you paid during the
              booking).
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              The following are examples of extra resources:
            </p>
            <ul
              style={{ listStyle: "decimal", paddingLeft: 16 }}
              className={`mb-3 ${css(AppStyles.pera18)}`}
            >
              <li>
                Travel expenses and time away from the clinic: Face to Face
                appointments or services where the Healthcity’s personnel is
                required to use a public or a private transport to visit the
                client’s home, school, office or other agreed venue within
                London, Outside London, or Overseas.
              </li>
              <li>
                Interpreter’s fee: Services received in a language that requires
                an interpreter (including sign language).
              </li>
              <li>
                Identity protection fee: The client wants their identity
                protected from the Healthcity’s personnel but not from Health
                BJ-UK.
              </li>
              <li>
                Extra time fee: Family Therapy and Exposure Behavioural
                Programmes are likely to last more than one hour at times.
              </li>
              <li>
                Extra fee: Any other preference the client wants Healthcity to
                consider that may require extra resource.
              </li>
            </ul>

            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              2.4 Late Payments:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Please note that late payment fee of five percent (5%) and the
              full VAT of the amount owed (and the late payment fee) will be
              applied to your invoice on a weekly basis if payment is not
              received by the due date. The ONLY time the late payment fee can
              be waived is if you contact us before the due date to give us an
              agreeable (to us) reason for exception and extension of the due
              date.
            </p>

            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              2.5 UK VAT:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              VAT charged from 01/01/2015 for VAT chargeable services as HC
              becomes VAT registered.
            </p>
          </div>

          <div className={`my-4 mb-5`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              3.0 WAITING ROOMS:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Please note that the waiting rooms in some of our offices or
              clinics are closed evenings and weekends, so clients will be asked
              to meet their Counsellors or therapists service deliverer (e.g.
              therapist) at the exact appointment time.
            </p>
          </div>

          <div className={`my-4 mb-5`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              4.0 REFERRAL:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              4.1 I agreed to refer myself to Healthcity. I agreed that Health
              BJ-UK shall contact me for appointment, assessment and service
              provision.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              4.2 I agreed that even if I refused for information to be shared
              with my GP/Family or Private Medical
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Doctor (Healthcity respects your decision and privacy) it is my
              GP/Family or Private Medical Doctor (and not Healthcity) who
              holds the medical responsibility for my medications and
              healthcare.
            </p>
          </div>

          <div className={`my-4 mb-5`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              5.0 SHARING INFORMATION:
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              I agreed for my information to be confidentially shared within
              Healthcity for the purpose of providing me a better care as well
              as Healthcity’s supervision and training.
            </p>
            <h2
              className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}
            >
              GDPR:{" "}
              <span className={css(AppStyles.weight4)}>
                {" "}
                Healthcity will not share your personal information or data
                without your consent. Healthcity upholds The General Data
                Protection Regulation (GDPR).{" "}
              </span>
            </h2>
          </div>

          <div className={`my-4 mb-5`}>
            <h2
              className={`mb-4 mt-5 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              6.0 RISK OF HARM AND EMERGENCY SUPPORT:
            </h2>

            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              6.2 If I am in distress and worried about the immediate risk of
              harm to myself or others, I will go to or contact my nearest
              Accident & Emergency service.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              6.3 If I am not at immediate risk but in distress and like to have
              support and advice, I will contact my GP/Family or Private Medical
              Doctor.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              People in the UK can contact: Alcoholics Anonymous –{" "}
              <a href="tel:08457697555">0845 769 7555</a>. Website:{" "}
              <a href="http://www.alcoholics-anonymous.org.uk/" target="_blank">
                http://www.alcoholics-anonymous.org.uk/
              </a>
              ; Carers support – <a href="tel:08088087777">0808 808 7777</a> .
              Website:
              <a href="http://www.carersuk.org" target="_blank">
                http://www.carersuk.org
              </a>{" "}
              . Citizens Advice Bureau –{" "}
              <a href="tel:01392425517">01392 425 517</a> . Website:
              <a href="http://www.citizensadvice.org.uk/" target="_blank">
                http://www.citizensadvice.org.uk/
              </a>{" "}
              . Cruse Bereavement Care – Website:
              <a href="http://www.cruse.org.uk" target="_blank">
                http://www.cruse.org.uk
              </a>
              . Samaritans – <a href="tel:08457909090">08457 90 90 90</a>.
              Website:{" "}
              <a href="http://www.samaritans.org/" target="_blank">
                http://www.samaritans.org/
              </a>
              . Rape Crisis England and Wales.{" "}
              <a href="tel:08088029999">0808 802 9999</a>. Website:
              <a href="http://www.rapecrisis.org.uk" target="_blank">
                http://www.rapecrisis.org.uk
              </a>
              .
            </p>
            <p className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
              6.4 Are you feeling suicidal, harming yourself (e.g. pulling hair,
              cutting etc) or being bullied, in domestic violence or at risk to
              yourself or to another person?
            </p>
            <h2
              style={{ paddingLeft: 16 }}
              className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}
            >
              If Yes,{" "}
              <span className={css(AppStyles.weight4)}>
                {" "}
                contact and receive support from a Helpline you know or from one
                of the organisations below..{" "}
              </span>
            </h2>
            <p className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
              (a) UK Residents:
            </p>
            <ul
              style={{ listStyle: "disc", paddingLeft: 16 }}
              className={`mb-3 ${css(AppStyles.pera18)}`}
            >
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>Samaritans:</span>{" "}
                <a href="tel: 08457909090"> 08457 909090</a>. (24 hour crisis
                line for people contemplating harming themselves).Website:{" "}
                <a href="http://www.samaritans.org/" target="_blank">
                  http://www.samaritans.org/
                </a>{" "}
                .
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>Saneline:</span>{" "}
                <a href="tel: 03003047000"> 0300 304 7000</a> ,
                <a href="tel: 07984967708"> 07984 967 708 </a>
                (practical information, crisis care and emotional support).
                4.30pm to 10.30pm weekdays and weekends including Bank Holidays.
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>Our GP:</span> If you need to,
                contact your GP on their phone number during your surgery
                working hours.
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  Google the Single Point of Access Crisis Helpline
                </span>{" "}
                in your Borough of residence and ask for help 24 hours /seven
                days.{" "}
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  NHS Direct: 24 hours a day on{" "}
                  <a href="tel: 08454647">0845 4647</a>.
                </span>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>NHS 111:</span> 24 hours a
                day, 7 days a week. For urgent medical problems.{" "}
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  NHS 111 British Sign Language
                </span>{" "}
                if you are Deaf and wants a phone service:{" "}
                <ul
                  style={{ listStyle: "disc", paddingLeft: 16 }}
                  className={`my-3 ${css(AppStyles.pera18)}`}
                >
                  <li className={`mb-3`}>
                    England –{" "}
                    <a
                      href="http://www.interpreternow.co.uk/nhs111/"
                      target="_blank"
                    >
                      {" "}
                      NHS 111 (BSL) interpreter service{" "}
                    </a>
                    .
                  </li>
                  <li className={`mb-3`}>
                    Scotland –{" "}
                    <a href="https://www.nhs24.scot/111/when-to-phone-111/">
                      {" "}
                      NHS 24 111{" "}
                    </a>
                    .
                  </li>
                  <li className={`mb-3`}>
                    Wales –{" "}
                    <a
                      href="https://www.ambulance.wales.nhs.uk/en/315"
                      target="_blank"
                    >
                      {" "}
                      NHS 111 Wales{" "}
                    </a>
                    .
                  </li>
                  <li className={`mb-3`}>
                    Northern Ireland –{" "}
                    <a
                      href="https://interpreternow.co.uk/nhs111ni"
                      target="_blank"
                    >
                      {" "}
                      NHS 111 Northern Ireland{" "}
                    </a>
                    .
                  </li>
                  <li className={`mb-3`}>
                    Or call <a href="tel: 18001111"> 18001 111 </a>
                    on a textphone.
                  </li>
                </ul>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>Carers in Mind:</span> If you
                are a carer for someone with a mental health problem and feel
                you could do with some support: telephone{" "}
                <a href="tel:02089407384"> 020 8940 7384</a> Email:
                <a href="mailto:carers@rbmind.org">carers@rbmind.org</a>{" "}
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>999 Emergency:</span> If you
                have or feel you are suicidal or about to harm yourself, or harm
                someone else, phone <a href="tel: 999">999</a>{" "}
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  Accident and Emergency (A & E) Unit:
                </span>
                You can go to A & E department nearest to your location. If you
                call <a href="tel: 999">999</a> , the call hander shall tell you
                the nearest A & E that will assist you.
              </li>

              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>Homeless, </span>
                <a href="tel:08088004444">0808 800 4444</a>.
                <a href="https://www.homeless.org.uk" target="_blank">
                  {" "}
                  homeless.org.uk/{" "}
                </a>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>MIND, </span>
                <a href="tel:03001233393">0300 123 3393</a>.
                <a href="https://www.mind.org.uk" target="_blank">
                  {" "}
                  mind.org.uk{" "}
                </a>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>CHILDLINE, </span>
                <a href="tel:08001111">0800 1111</a>.
                <a href="http://www.childline.org.uk" target="_blank">
                  {" "}
                  childline.org.uk/{" "}
                </a>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>Alcoholics Anonymous – </span>
                <a href="tel:08457697555">0845 769 7555</a> . Website:
                <a
                  href="http://www.alcoholics-anonymous.org.uk/"
                  target="_blank"
                >
                  http://www.alcoholics-anonymous.org.uk/{" "}
                </a>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  No Panic – Helpline{" "}
                  <a href="tel:08088080545">0808 808 0545</a>.{" "}
                </span>
                Support for people who experience panic attacks, and those with
                phobias, obsessive-compulsive disorder, general anxiety disorder
                and who are withdrawing from tranquillisers. (10 am-10 pm every
                day). Email:{" "}
                <a href="mailto:ceo@nopanic.org.uk">ceo@nopanic.org.uk</a>, web:
                <a href="https://nopanic.org.uk" target="_blank">
                  nopanic.org.uk{" "}
                </a>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>Carers support – </span>
                <a href="tel:08088087777">0808 808 7777</a> . Website:
                <a href="http://www.carersuk.org" target="_blank">
                  http://www.carersuk.org{" "}
                </a>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  Citizens Advice Bureau –{" "}
                </span>
                <a href="tel:01392425517">01392 425 517</a> . Website:
                <a href="http://www.citizensadvice.org.uk/" target="_blank">
                  http://www.citizensadvice.org.uk/{" "}
                </a>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>Bereavement Care – </span>
                Website:
                <a href="http://www.cruse.org.uk" target="_blank">
                  http://www.cruse.org.uk{" "}
                </a>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  Rape Crisis England and Wales.{" "}
                </span>
                <a href="tel:08088029999">0808 802 9999</a> . Website:
                <a href="http://www.rapecrisis.org.uk" target="_blank">
                  http://www.rapecrisis.org.uk{" "}
                </a>
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  Bristol Crisis Service For Women (BCSW) – Helpline{" "}
                  <a href="tel:01179251119">0117 925 1119</a>.{" "}
                </span>
                National helpline for women in distress, especially women who
                self-harm. Open Friday and Saturday evenings 9 pm to 12.30 am
                and Sundays 6pm to 9pm.
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  Support Line – <a href="tel:02085549004">0208 554 9004</a>.{" "}
                </span>
                A confidential helpline providing emotional support to
                individuals of any age on any Support line also has a data base
                of local services. Ring for helpline opening hours. You can also
                e-mail on{" "}
                <a href="mailto:infor@supportline.org.uk">
                  infor@supportline.org.uk
                </a>
                .
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  42nd Street – Helpline{" "}
                  <a href="tel:01618320170">0161 832 0170</a>.{" "}
                </span>
                A mental health service in Manchester for young people aged 14 –
                25. Their helpline offers support and advice, particularly
                around suicide and self injury. Open weekdays from 12.30 pm
                to4.30 pm.{" "}
                <a href="https://www.fortysecondstreet.org.uk" target="_blank">
                  www.fortysecondstreet.org.uk
                </a>
                .
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>
                  Nightline (for University students){" "}
                </span>
                National organization of NightLine student helplines in
                Universities across the Visit the website to find out if your
                Uni has one.{" "}
                <a href="https://www.nightline.ac.uk" target="_blank">
                  www.nightline.ac.uk
                </a>
                .
              </li>
              <li className={`mb-3`}>
                <span style={{ fontWeight: 700 }}>Overseas Residents:</span>
              </li>
              <li className={`mb-3`}>
                Contact your friends, family members, next of kin, and your
                local Accident and Emergencies in your country.
              </li>
            </ul>
          </div>

          <div className={`my-4 mb-5`}>
            <h2
              className={`mb-3 ${css([
                AppStyles.headingThree,
                AppStyles.weight7,
              ])}`}
            >
              7.0 USEFUL WEBSITES
            </h2>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Healthcity is not responsible and reliable for the contents of
              external websites.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Nothing in this User Agreement shall limit or exclude our
              liability for fraudulent misrepresentation, for death or personal
              injury resulting from our negligence or the negligence of our
              agents or employees or for any other liability that cannot be
              limited or excluded by law.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              <span style={{ fontWeight: 700 }}>
                <a href="http://moodgym.anu.edu.au" target="_blank">
                  http://moodgym.anu.edu.au
                </a>{" "}
                – Free online self-help course.
              </span>
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              <span style={{ fontWeight: 700 }}>
                <a href="https://www.cci.health.wa.gov.au" target="_blank">
                  www.cci.health.wa.gov.au
                </a>{" "}
                – Free self-help workbooks for emotional or mental health
                problems.
              </span>
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              <span style={{ fontWeight: 700 }}>
                <a href="http://www.livinglifetothefull.com" target="_blank">
                  www.livinglifetothefull.com
                </a>{" "}
                – Free online life skills course working problems.
              </span>
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Healthcity helping families attain psychological, physical,
              financial and legal wellbeing to stay happily and safely.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              <span style={{ fontWeight: 700 }}>Web: </span>
              <a
                href="https://clinicalpsychology.healthbj-uk.org"
                target="_blank"
              >
                clinicalpsychology.healthbj-uk.org
              </a>
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              <span style={{ fontWeight: 700 }}>
                Tel No1: <a href="tel:03338003006">0333 800 3006</a>{" "}
              </span>
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              <span style={{ fontWeight: 700 }}>
                Tel No2: <a href="tel:03337890012">0333 789 0012</a>{" "}
              </span>
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              <span style={{ fontWeight: 700 }}>Opening hours: </span>
              Monday-Friday 8am-11pm, Saturday 8am-9pm.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              <span style={{ fontWeight: 700 }}>Address: </span>
              Healthcity, Davenport House, 16 Pepper Street, Canary Wharf,
              London E14 9RP, United Kingdom.
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              <span style={{ fontWeight: 700 }}>Facebook: </span>
              <a
                href="https://www.facebook.com/HealthCityandTwinBrain"
                target="_blank"
              >
                www.facebook.com/HealthCityandTwinBrain
              </a>
            </p>
          </div>
        </div>
      </div>
      <WebFooter />
    </div>
  );
}

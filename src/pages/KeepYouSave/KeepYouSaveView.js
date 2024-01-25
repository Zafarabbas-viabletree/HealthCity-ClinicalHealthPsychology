// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./KeepYouSaveStyles";
import { AppStyles } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { Helmet } from "react-helmet";

export default function KeepYouSaveView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Keep You Save | Clinical Or Health Psychology | Healthcity
        </title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Keep You Save/Risk" />
      <div className={`container my-5`}>
        <p className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Are you feeling suicidal, harming yourself (e.g. pulling hair,
          cutting, etc) or being bullied, in domestic violence, or at risk to
          yourself or to another person?
        </p>
        <h2
          style={{
            paddingLeft: 16,
          }}
          className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}
        >
          If Yes,{" "}
          <span className={css(AppStyles.weight4)}>
            {" "}
            contact and receive support from a Helpline you know or from one of
            the organisations below..{" "}
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
            <a href="tel: 08457909090"> 08457 909090</a>. (24 hour crisis line
            for people contemplating harming themselves).Website:{" "}
            <a href="http://www.samaritans.org/" target="_blank">
              http://www.samaritans.org/
            </a>{" "}
            .
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>Saneline:</span>{" "}
            <a href="tel: 03003047000"> 0300 304 7000</a> ,
            <a href="tel: 07984967708"> 07984 967 708 </a>
            (practical information, crisis care and emotional support). 4.30pm
            to 10.30pm weekdays and weekends including Bank Holidays.
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>Our GP:</span> If you need to,
            contact your GP on their phone number during your surgery working
            hours.
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>
              Google the Single Point of Access Crisis Helpline
            </span>{" "}
            in your Borough of residence and ask for help 24 hours /seven days.{" "}
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>
              NHS Direct: 24 hours a day on{" "}
              <a href="tel: 08454647">0845 4647</a>.
            </span>
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>NHS 111:</span> 24 hours a day, 7
            days a week. For urgent medical problems.{" "}
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
                <a
                  href="https://www.nhs24.scot/111/when-to-phone-111/"
                  target="_blank"
                >
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
                <a href="https://interpreternow.co.uk/nhs111ni" target="_blank">
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
            <span style={{ fontWeight: 700 }}>Carers in Mind:</span> If you are
            a carer for someone with a mental health problem and feel you could
            do with some support: telephone{" "}
            <a href="tel:02089407384"> 020 8940 7384</a> Email:
            <a href="mailto:carers@rbmind.org">carers@rbmind.org</a>{" "}
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>999 Emergency:</span> If you have
            or feel you are suicidal or about to harm yourself, or harm someone
            else, phone <a href="tel: 999">999</a>{" "}
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>
              Accident and Emergency (A & E) Unit:
            </span>
            You can go to A & E department nearest to your location. If you call{" "}
            <a href="tel: 999">999</a> , the call hander shall tell you the
            nearest A & E that will assist you.
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
            <a href="http://www.alcoholics-anonymous.org.uk/" target="_blank">
              http://www.alcoholics-anonymous.org.uk/{" "}
            </a>
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>
              No Panic – Helpline <a href="tel:08088080545">0808 808 0545</a>.{" "}
            </span>
            Support for people who experience panic attacks, and those with
            phobias, obsessive-compulsive disorder, general anxiety disorder and
            who are withdrawing from tranquillisers. (10 am-10 pm every day).
            Email: <a href="mailto:ceo@nopanic.org.uk">ceo@nopanic.org.uk</a>,
            web:
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
            <span style={{ fontWeight: 700 }}>Citizens Advice Bureau – </span>
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
            self-harm. Open Friday and Saturday evenings 9 pm to 12.30 am and
            Sundays 6pm to 9pm.
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>
              Support Line – <a href="tel:02085549004">0208 554 9004</a>.{" "}
            </span>
            A confidential helpline providing emotional support to individuals
            of any age on any Support line also has a data base of local
            services. Ring for helpline opening hours. You can also e-mail on{" "}
            <a href="mailto:infor@supportline.org.uk">
              infor@supportline.org.uk
            </a>
            .
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>
              42nd Street – Helpline <a href="tel:01618320170">0161 832 0170</a>
              .{" "}
            </span>
            A mental health service in Manchester for young people aged 14 – 25.
            Their helpline offers support and advice, particularly around
            suicide and self injury. Open weekdays from 12.30 pm to4.30 pm.{" "}
            <a href="https://www.fortysecondstreet.org.uk" target="_blank">
              www.fortysecondstreet.org.uk
            </a>
            .
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>
              Nightline (for University students){" "}
            </span>
            National organization of NightLine student helplines in Universities
            across the Visit the website to find out if your Uni has one.{" "}
            <a href="https://www.nightline.ac.uk" target="_blank">
              www.nightline.ac.uk
            </a>
            .
          </li>

          <li className={`mb-3`} style={{ listStyle: "none" }}>
            <span style={{ fontWeight: 700 }}>Overseas Residents:</span>
          </li>
          <li className={`mb-3`}>
            Contact your friends, family members, next of kin, and your local
            Accident and Emergencies in your country.
          </li>
        </ul>
      </div>
      <WebFooter />
    </div>
  );
}

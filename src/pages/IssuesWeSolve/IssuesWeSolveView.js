// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./IssuesWeSolveStyles";
import { AppStyles } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Helmet } from "react-helmet";

export default function IssuesWeSolveView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Issues We Solve | Cognitive behavior therapy | Healthcity
        </title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Issues We Solve" />
      <div className={`container my-5`}>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Panic Attacks:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          A panic attack is the abrupt onset of intense fear or discomfort that
          reaches a peak within minutes and includes at least four of the
          following symptoms: Palpitations, pounding heart, or accelerated heart
          rate. Sweating. Trembling or shaking. Sensations of shortness of
          breath or smothering.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Addictions, OCD or Lying:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Obsessive thoughts and compulsive behaviors (OCD), gambling, alcohol,
          drugs, pornography, internet or sex, compulsive lying, etc.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Avoidance or Phobia/Fear of:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Public speaking, driving. traveling, sickness, strangers, places,
          dating, sex, physical touch, difficult conversations, difficult
          people, death/dying, etc.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Depression or Low mood:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Feeling hopeless, lonely, sad, over or under sleeping, tiredness, low
          motivation or energy.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Trauma, abuse and PTSD:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Unpleasant symptoms after an accident or sports injury and
          war/disaster? Emotional, verbal, sexual, financial, religious,
          political, physical, resource and other controls, and manipulation
          abuses?
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Low Self-Esteem and Self-Worth:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Insecurity, less self-appreciation, putting self-down, low or no
          resilience. Lack of confidence.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Parents and children in distress:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Family reunification after children returned from foster care. A child
          at risk of aggressive or behavioral disorders. Abusive or neglectful
          parenting, child abuse or neglect. Difficulties in parenting.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Physical pain or conditions:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Tension headaches, intensely fatigued and exhausted (Chronic Fatigue
          Syndrome/Medically Unexplained Symptoms (MUS), fibromyalgia, diabetes,
          arthritis, backache, physical disability, auditory processing
          disorder, cognitive/memory problems, tinnitus, hyperacusis, cardiac
          conditions, eating disorders, gastrointestinal disorders/ IBS, HIV,
          musculoskeletal conditions, neurological disorders, oncology/cancer,
          etc.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Stress for exposure to own or someone’s stress:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Stress or distress with coping with someone’s health issue (carers,
          friends, and families with carers’ stress) or for exposure to a crisis
          or a long-term activity/health condition
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Relationship Issues:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Not getting along with people? Relationship conflicts, crisis,
          betrayals, jealousy, envy, breakups or the joy/spark of your marriage
          or relationship declining or gone.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          School, occupational and business people’s wellbeing issues, and
          Employee Assisted Programmes (EAP):
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Organisational, workplace and staff wellbeing. Resilience and
          work-related stress/burnout or trauma (bullying, harassment,
          discrimination, neglect, safeguarding, and grievance/formal
          proceedings, job satisfaction, work/life balance. Over or under
          working, work or academic performance anxiety, undervalued, being
          put/shut down. Occupational health referrals, Post-illness back to
          school or back to work interviews, phased return planning.
          Rehabilitative psychological skills training and reintegration into
          community, school or work life.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Self-harming:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Are you in distress and struggling with a desire to hurt yourself?
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Stress and Anxiety:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Worrying about things too much? Feels overwhelmed? Panic, on edgy.
          Stressed out due to life’s multiple demands on you?
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Sex or Gender Issues:
        </h2>
        <p className={`mb-4 ${css(AppStyles.pera18)}`}>
          Sexual difficulties causing distress and Lesbian Gay, Bisexual and
          Transgender (LGBT) identity issues.
        </p>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Social or Public Speaking Anxiety.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Pain Management.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Sport Performance.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Driving Anxiety.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Female Genital Mutilation (FGM).
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Fatigue.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Child Abuse/Neglect.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Autistic Spectrum Disorder.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Anger, Irritable Mood, and challenging behaviours causing stress and
          distress around.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Cross-cultural or faith related wellbeing issues.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Eating, weight, or body image issues.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Family issues.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Grief/bereavement and loss.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Emotional problems induced by financial (e.g. debt), housing or legal
          situations/needs.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Indecision or procrastination.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Low/no life meaning and purpose or a sense of drift.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Mild schizophrenia.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Personality issues.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Pregnancy related-occupational and psychological issues.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Migrants, refugees and business men and women adjustment and
          transitional issues.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Re-offending issues.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Sleeping problems.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.font18Size,
            AppStyles.weight7,
            AppStyles.capitalize,
          ])}`}
        >
          Domestic Violence.
        </h2>
        <h2
          style={{ lineHeight: 1.47 }}
          className={`mb-2 ${css([
            AppStyles.weight7,
            AppStyles.capitalize,
            styles.heading,
          ])}`}
        >
          Family issues:
        </h2>
        <ul style={{ "list-style": "disc", lineHeight: "28px" }}>
          <li>
            Conflicts, domestic violence, and Female Genital Mutilation (FGM).
          </li>
          <li>Emotional blocks for infertility</li>
          <li className={`${css(AppStyles.weight7)}`}>
            Parents and children in distress:
          </li>
          <li>
            Family reunification after children returned from foster care. Child
            at risk of aggressive or behavioural disorders. Abusive or
            neglectful parenting, child abuse or neglect.
          </li>
          <li className={`${css(AppStyles.weight7)}`}>
            Difficulties in parenting.
          </li>
          <li className={`${css(AppStyles.weight7)}`}>
            Migrants, refugees and business men and women adjustment and
            transitional issues.{" "}
          </li>
          <li className={`${css(AppStyles.weight7)}`}>
            Trauma, abuse and PTSD:
          </li>
          <li className={`${css(AppStyles.weight7)}`}>
            Unpleasant symptoms after an accident or sports injury and
            war/disaster?{" "}
          </li>
          <li>
            Emotional, verbal, sexual, financial, religious, political,
            physical, resource and other controls, and manipulation abuses
          </li>
          <li className={`${css(AppStyles.weight7)}`}>
            Emotional problems induced by financial (e.g. debt), housing or
            legal situations/needs.
          </li>
          <li className={`${css(AppStyles.weight7)}`}>
            Pregnancy related-occupational and psychological issues.{" "}
          </li>
          <li className={`${css(AppStyles.weight7)}`}>
            My problem not on this list, so I shall provide you the details
            myself.
          </li>
        </ul>
      </div>
      <WebFooter />
    </div>
  );
}

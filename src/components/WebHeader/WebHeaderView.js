// @flow
import React from "react";
import { css } from "aphrodite";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./WebHeaderStyles";
import { Images } from "../../theme";
import _ from "lodash";
import { Button } from "react-bootstrap";

const menuItems = [
  {
    className: css(styles.navAnchorTag),
    activeClassName: css(styles.navAnchorTagActive),
    to: ROUTES.SERVICES,
    title: "Services",
  },
  {
    className: css(styles.navAnchorTag),
    activeClassName: css(styles.navAnchorTagActive),
    to: ROUTES.ABOUT_US,
    title: "About",
  },
  {
    className: css(styles.navAnchorTag),
    activeClassName: css(styles.navAnchorTagActive),
    to: ROUTES.TEAM,
    title: "Team",
  },
  {
    className: css(styles.navAnchorTag),
    activeClassName: css(styles.navAnchorTagActive),
    to: ROUTES.ISSUEWESOLVE,
    title: "Issues we solve",
  },
  {
    className: css(styles.navAnchorTag),
    activeClassName: css(styles.navAnchorTagActive),
    to: ROUTES.CONTACT,
    title: "Contact",
  },
];

// method for logo rendering
const displayLogo = (styleClass) => {
  return (
    <div className={`${css([styles[[styleClass]]])}`}>
      <NavLink to="/" style={{ zIndex: 1 }}>
        <img className={`${css([styles.logoImage])}`} src={Images.hc_logo} />
      </NavLink>
    </div>
  );
};

export default function WebHeaderView(props) {
  return (
    <div className={css(styles.headerCont)}>
      <header className={`${css([styles.siteHeader])}`}>
        {/* Header Left */}
        {displayLogo("headerSide")}
        {/* Header Navigation */}
        <div className={`${css(styles.hederContainer)}`}>
          {/* Logo inside container for smaller width screens */}
          {/* Header Left */}
          {displayLogo("headerSideInner")}

          <nav className={`navbar navbar-expand-lg ${css(styles.navBar)}`}>
            {/* Hamburger Icon */}
            <div
              className={`${css(styles.hamburgerMenu)}`}
              onClick={props.onHamburgeClick}
            >
              <span className={`${css(styles.hamburgerIcon)}`}></span>
              <span className={`${css(styles.hamburgerIcon)}`}></span>
              <span className={`${css(styles.hamburgerIcon)}`}></span>
            </div>
            <div
              className={`${css(
                props.showMobileMenu && styles.collabeMenuWrap
              )}`}
              onClick={props.onHamburgeHide}
            ></div>

            <div
              className={`${css([
                props.showMobileMenu && styles.showMenu,
              ])} ${css(styles.collabeMenu)} `}
              id={`navbarNavDropdown`}
            >
              <span
                className={`${css(styles.closeMenu)}`}
                onClick={props.onHamburgeHide}
              >
                <img
                  className={`${css(styles.CloseBtn)}`}
                  src={Images.crossIcon}
                  alt=""
                />
              </span>
              <ul className={`navbar-nav ${css(styles.NavbarUl)}`}>
                {menuItems.map((item) => (
                  <li
                    key={item.to}
                    className={`nav-item ${css(
                      styles.NavItem,
                      styles.borderBottom
                    )}`}
                  >
                    <NavLink
                      exact={_.isNil(item.exact) ? false : item.exact}
                      className={item.className}
                      activeClassName={item.activeClassName}
                      to={item.to}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <NavLink to={ROUTES.BOOKING}>
                {/* <a
                href="https://healthcity.org.uk/en/live-counselling/"
                target="_blank"
              > */}
                <Button className={css([styles.counsellingBtn])}>
                  Live Counselling
                </Button>
                {/* </a> */}
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

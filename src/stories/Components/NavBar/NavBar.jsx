/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import cntl from "cntl";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from '@iconify/react';

import Input from "../Input/Input";
import ESLogo from "../../assets/images/es-logo.png";
import Magnify from "../../assets/images/magnifying-glass.svg";
import AvatarImg from "../../assets/images/avatar.jpg";
import Chevron from "../Chevron/Chevron";

const containerCN = cntl`
  flex
  width-full
  bg-gray-500
  items-center
  justify-between
  px-3
`;

const logoContainerCN = cntl`
  m-3
  ml-0
  flex
  items-center
  cursor-pointer
`;

const logoCN = cntl`
  rounded
  h-12
`;

const estatespaceTextCN = cntl`
  font-semibold
  ml-2
`;

const actionIconContainerCN = cntl`
  hidden
  lg:flex
  ml-2
  flex-initial
  items-center
  justify-between
`;

const avatarCN = cntl`
  bg-brandGreen
  rounded
  w-10
  h-10
  flex
  items-center
  justify-center
`;

const menuButtonCN = cntl`
  pr-10
  pl-2
  py-2
`;
const menuIconCN = cntl`
  p-1
  m-1
  w-8
  h-8
  hover:cyan-500
`;

const NavBar = ({ onLogoutClick, onLogoClick, avatar }) => {
  const [showMenu, setShowMenu] = useState(false);

  const onLogoKeyDown = (event) => {
    if (event.key === "Enter") {
      // on enter
      onLogoClick();
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
    document.removeEventListener("click", closeMenu);
  };

  const onShowMenuClick = () => {
    setShowMenu(true);
    document.addEventListener("click", closeMenu);
  };
  return (
    <div className={containerCN}>
      <div
        className={logoContainerCN}
        onClick={onLogoClick}
        onKeyDown={onLogoKeyDown}y
        role="button"
        tabIndex={0}
      >
        <img className={logoCN} alt="ESLogo" src={ESLogo} />
        <p className={estatespaceTextCN}>ESTATESPACE</p>
        <Chevron className="w-2 transform rotate-90 ml-2" />
      </div>
      <div className="flex flex-row">
        <div className={actionIconContainerCN}>
          <div
            className="mr-16"
          >
            <Input 
              placeholder="Search Estateplace" 
              icon={Magnify}
              name="search"
            />
          </div>
          <div
            className="mr-8"
          >
            <button type="button"
              className="border-2 rounded bg-tramsparent h-full pl-1 items-center"
            >
              <div className="flex flex-row items-center">
                <span> New York | 7:52 AM</span>
                <span>
                  <Icon className="p-1 w-8 h-8" icon="mdi:av-timer"/>
                </span>
              </div>
            </button>
          </div>
          <div
            className="flex flex-row justify-end"
          >
            <Icon className={menuIconCN} icon="mdi:help-circle-outline" />
            <Icon className={menuIconCN} icon="mdi:bell-outline" />
            <Icon className={menuIconCN} icon="mdi:cog-outline" />
          </div>
        </div>
        <div className={actionIconContainerCN}>
          <button onClick={onShowMenuClick} type="button">
            {avatar?.image ? null : (
              <div className="flex items-center mr-2">
                <div className={avatarCN}>
                  {/* <p className="font-semibold uppercase">{avatar?.initials}</p> */}
                  <img className={logoCN} alt="Avatar" src={AvatarImg} />
                </div>
                <Chevron className="w-2 transform rotate-90 ml-2" />
              </div>
            )}
          </button>
          {showMenu && (
            <div className="absolute top-16 right-2 z-50 bg-gray-300 flex flex-col">
              <button
                className={menuButtonCN}
                type="button"
                onClick={onLogoutClick}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  /**
   * temp way to logout during dev
   */
  onLogoutClick: PropTypes.func,
  /**
   * function called when the estatespace logo is clicked
   */
  onLogoClick: PropTypes.func,
  /**
   * object containing avatar image or initials
   */
  avatar: PropTypes.shape({
    image: PropTypes.string,
    initials: PropTypes.string,
  }),
};

NavBar.defaultProps = {
  onLogoutClick: null,
  onLogoClick: null,
  avatar: undefined,
};

export default NavBar;

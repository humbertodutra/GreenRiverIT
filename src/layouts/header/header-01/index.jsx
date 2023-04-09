/* eslint-disable no-console */
import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Logo from "../../../components/logo";
import MainMenu from "../../../components/menu/main-menu";
import MobileMenu from "../../../components/menu/mobile-menu";
import SearchForm from "../../../components/search-form/layout-01";
import FlyoutSearchForm from "../../../components/search-form/layout-02";
// import UserDropdown from "../..//user-dropdown";
import ColorSwitcher from "@components/color-switcher";
import BurgerButton from "@components/burger-button";
import Anchor from "@components/ui/anchor";
import Button from "@components/ui/button";
import { useOffcanvas, useSticky, useFlyoutSearch } from "../../../hooks/index";
import headerData from "../../../data/general/header-01.json";
import menuDataPT from "../../../data/general/menu-01-ptBr.json";
import menuDataEN from "../../../data/general/menu-01.json";
import Image from "next/image";

const Header = ({ className, setLocale, locale }) => {
  const sticky = useSticky();
  const { offcanvas, offcanvasHandler } = useOffcanvas();
  let menuData = menuDataPT;
    if (locale === "en-US") {
        menuData = menuDataEN }

  return (
    <>
      <header
        className={clsx(
          "rn-header haeder-default black-logo-version header--fixed header--sticky",
          sticky && "sticky",
          className
        )}
      >
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <Logo logo={headerData.logo} />
              <div className="mainmenu-wrapper">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                  <MainMenu menu={menuData} />
                </nav>
              </div>
            </div>
            <div className="header-right">
              <div className="button-container" style={{ display: "flex", marginRight: '10px' }}>
                <div
                  className="button-wrapper"
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="button"
                    className={clsx("light switch-btn")}
                    onClick={() => setLocale("en-US")}
                  >
                    <Image
                      src="/images/icons/united-kingdom.png"
                      alt="United Kingdom"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
                <div
                  className="button-wrapper"
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="button"
                    className={clsx("light switch-btn")}
                    onClick={() => setLocale("pt-BR")}
                  >
                    <Image
                      src="/images/icons/brazil-.png"
                      alt="Brazil"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
              </div>

              {/* <div className="setting-option d-none d-lg-block">
                            <ColorSwitcher />
                                <SearchForm />
                            </div>
                            <div className="setting-option rn-icon-list d-block d-lg-none">
                                <div className="icon-box search-mobile-icon">
                                    <button
                                        type="button"
                                        aria-label="Click here to open search form"
                                        onClick={searchHandler}
                                    >
                                        <i className="feather-search" />
                                    </button>
                                </div>
                               
                                <FlyoutSearchForm isOpen={search} />
                            </div> */}

              {/* <div className="setting-option rn-icon-list notification-badge">
                                <ColorSwitcher />
                                
                            </div>
                            <div className="setting-option rn-icon-list notification-badge">
                          
                            </div> */}
              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <BurgerButton onClick={offcanvasHandler} />
                </div>
              </div>
              <div id="my_switcher" className="setting-option my_switcher">
                <ColorSwitcher />
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={offcanvas}
        onClick={offcanvasHandler}
        menu={menuData}
        logo={headerData.logo}
      />
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

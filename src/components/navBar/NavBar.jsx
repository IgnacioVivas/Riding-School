import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import slider from "../../assets/images/home-slider-background-img.jpg";
import sliderTwo from "../../assets/images/slider-two-background-img.jpg";
import imgNav from "../../assets/images/nav-logo.png";
import MainTitle from "../mainTitle/MainTitle";
import Classes from "./navBar.module.scss";

function NavBar() {
  const currentRoute = useLocation();

  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const openMenu = () => {
    if (document.getElementById("menu")) {
      if (showMobileMenu == true) {
        document.querySelector("#menu").style.left = "auto";
      } else {
        document.querySelector("#menu").style.left = "-1000px";
      }
    }
  };

  return (
    <div
      className={
        currentRoute.pathname === "/"
          ? Classes.slider
          : Classes.sliderOtherSections
      }
      style={
        currentRoute.pathname === "/"
          ? { background: `url(${slider})` }
          : { background: `url(${sliderTwo})` }
      }
    >
      <div className={Classes.navBarContainer}>
        <div className={Classes.navBarWrapper}>
          <div className={Classes.iconLogo}>
            <Link to={`/`}>
              <img src={imgNav} alt="" />
            </Link>
          </div>
          <div
            className={Classes.iconHamburgerMobile}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <i className="ri-menu-fill" onClick={openMenu}></i>
            ) : (
              <i className="ri-close-line" onClick={openMenu}></i>
            )}
          </div>

          <ul className={Classes.menu} id="menu">
            <li className={Classes.menuItem}>
              <Link to={`/`} className={Classes.menuItemLink}>
                home
              </Link>
            </li>
            <li className={Classes.menuItem}>
              <Link to={`/about`} className={Classes.menuItemLink}>
                about
              </Link>
            </li>
            <li className={Classes.menuItem}>
              <Link to={`/lessons`} className={Classes.menuItemLink}>
                lessons
              </Link>
            </li>
            <li className={Classes.menuItem}>
              <Link to={`/gallery`} className={Classes.menuItemLink}>
                gallery
              </Link>
            </li>
            <li className={Classes.menuItem}>
              <Link to={`/contact`} className={Classes.menuItemLink}>
                contact
              </Link>
            </li>
            <div className={Classes.menuRedes}>
              <i className="ri-facebook-fill"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-twitter-fill"></i>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <MainTitle></MainTitle>
      </div>
    </div>
  );
}
export default NavBar;

import React from "react";
import "./styles.css";
import background from "./Rectangle 31.png";
import navIcone from "./Group 83.png";
import phoneIcon from "./local_phone_24px.png";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
    });
  };
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="logo" onClick={scrollToTop}>
        Mobile <span>Pandas</span>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link
              to="mainProjectContainer"
              smooth={true}
              duration={500}
              onClick={() => scrollToSection("mainProjectContainer")}
            >
              Портфолио
            </Link>
          </li>
          <li>
            <Link
              to="flexContainer"
              smooth={true}
              duration={500}
              onClick={() => scrollToSection("flexContainer")}
            >
              Этапы
            </Link>
          </li>
          <li>
            <Link
              to="yourApp"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={() => scrollToSection("yourApp")}
            >
              Цены
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              smooth={true}
              duration={500}
              onClick={() => scrollToSection("reviews")}
            >
              Отзывы
            </Link>
          </li>
          <li>
            <Link
              to="questionContainer"
              smooth={true}
              duration={500}
              onClick={() => scrollToSection("questionContainer")}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <span className="phoneNumber">+7 (960) 599-73-55</span>
    </header>
  );
};

export const MobileHeader = () => {
  return (
    <header className="mobile-header">
      <div className="mobile-left">
        <img src={navIcone} alt="navIcone" />
      </div>
      <div className="mobile-center">
        <div className="logo">
          Mobile <span>Pandas</span>
        </div>
      </div>
      <div className="mobile-right">
        <img src={phoneIcon} alt="phoneIcon" />
      </div>
    </header>
  );
};

import "./styles.css";
import { companiesSlides } from "./ourCompanies";
import Carousel from "../carousel/Carousel";
import { Heading } from "../heading";
import { aboutUsData } from "../data";
import { AboutUsBox } from "../aboutUsBox";
import { SmallBalls } from "../smallBalls";

export const TrustUsComponent = () => {
  const settings = {
    dots: false,
    slidesToShow: 4.15,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const styles = {
    width: "1200px",
  };
  const title = "Нам доверяют";
  const subTitle = "долгосрочные отношения на основе качества и доверия";
  const mobile = window.innerWidth < 810;

  return (
    <div className="mainProjectContainer">
      <div className="contentCompanies"></div>
      <Heading title={title} subTitle={subTitle} />
      <div className="aboutUs">
        {aboutUsData.map((box, index) => {
          return (
            <div>
              {" "}
              <AboutUsBox title={box.title} subTitle={box.subTitle} />
              {index !== aboutUsData.length - 1 && mobile ? (
                <SmallBalls length={3} />
              ) : null}
            </div>
          );
        })}
      </div>

      <Carousel slides={companiesSlides} settings={settings} styles={styles} />
    </div>
  );
};

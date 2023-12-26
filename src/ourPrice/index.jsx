import { Button } from "../button";
import Carousel from "../carousel/Carousel";
import { Heading } from "../heading";
import { ourPriceSlides } from "./priceSlides";
import "./styles.css";

export const OurPrice = () => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
        },
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const styles = {
    background: "#00010A",
    width: "1000px",
  };
  const title = "наши цены";
  const subTitle =
    "Цены, которые делают мобильную разработку доступной и выгодной";
  const titleBtn = "Рассчитать стоимость";
  return (
    <div className="mainProjectContainer">
      <div className="carouselContainter">
        <Heading title={title} subTitle={subTitle} />
        <Carousel slides={ourPriceSlides} settings={settings} styles={styles} />
      </div>
      <div className="yourApp">
        <div className="priceContainer">
          <h2>свое приложение</h2>
          <h3>от 100 000 рублей</h3>
          <p>Поможем вам разработать приложение любой сложности</p>
        </div>
        <div className="btnContainer">
          <Button title={titleBtn} />
        </div>
      </div>
    </div>
  );
};

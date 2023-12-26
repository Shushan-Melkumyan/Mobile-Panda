import Carousel from "../carousel/Carousel";
import { Heading } from "../heading";
import { ourReviewsSlides } from "../ourReviews/ourReviewSlides";
import "./styles.css";

export const OurReviews = () => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const styles = {
    background: "#00010A",
    width: "1200px",
  };
  const title = "наши Отзывы";
  const subTitle = "Мы создаем мобильные приложения, которые востребованы";
  return (
    <div className="mainProjectContainer">
      <div className="carouselContainter">
        <Heading title={title} subTitle={subTitle} />
        <Carousel
          slides={ourReviewsSlides}
          settings={settings}
          styles={styles}
        />
      </div>
    </div>
  );
};

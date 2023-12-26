import Carousel from "../carousel/Carousel";
import { Heading } from "../heading";
import { projectSlides } from "./projectSlides";
import "./styles.css";

export const OurProjects = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const styles = {
    background: "#1A1A23",
    maxWidth: "880px",
    maxHeight: "505px",
  };

  const title = "наши работы";
  const subTitle = "некоторые из наших проектов";
  return (
    <div className="mainProjectContainer">
      <Heading title={title} subTitle={subTitle} />
      <Carousel slides={projectSlides} settings={settings} styles={styles} />
    </div>
  );
};

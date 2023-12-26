import { ourProjectsData } from "../data";
import "./styles.css";

const mobile = window.innerWidth < 810;

export const projectSlides = ourProjectsData?.map((el, index) => (
  <div key={index} className="sliderContainer">
    <div className="projectContent">
      <div className="projectDescription">
        <h2>{el.projectTitle}</h2>
        <p>{el.projectDescription}</p>
      </div>{" "}
      <div className="imageContainer">
        <img src={el?.img?.front} alt={`Front Image ${index + 1}`} />
        {!mobile && <img src={el?.img?.back} alt={`Back Image ${index + 1}`} />}
      </div>
    </div>
  </div>
));

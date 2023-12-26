import { ourReviewsData } from "../data";
import "./styles.css";

export const ourReviewsSlides = ourReviewsData?.map((el, index) => (
  <div className="reviews" key={index}>
    <img src={el?.img} alt="img" className="imgReview" />
  </div>
));

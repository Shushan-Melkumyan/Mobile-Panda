import { Button } from "../button";
import { ourPriceData } from "../data";
import "./styles.css";
import checkMarks from "./✓.png";

const title = "Оставить заявку";

export const ourPriceSlides = ourPriceData?.map((el, index) => (
  <div key={index} className="priceSlidesContainer">
    <div className="priceContent">
      <div className="priceDescription">
        <h2 className="shop">{el.header}</h2>
        <p className="priceRange">{el.price}</p>
      </div>{" "}
      <div className="listContainer">
        <ul style={{ listStyleType: "none" }}>
          {el.services.map((text, index) => (
            <li key={index}>
              <img src={checkMarks} className="checkMarks" />
              <span> {text}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button title={title} />
    </div>
  </div>
));

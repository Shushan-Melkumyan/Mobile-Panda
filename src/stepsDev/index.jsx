import {
  stepsDevDataMobile,
  stepsDevDatafirst,
  stepsDevDatasecond,
} from "../data/index";
import { Heading } from "../heading";
import { SmallBalls } from "../smallBalls";
import "./styles.css";
const title = "Этапы разработки";
const subTitle = "понимание - ключ к хорошему проекту";
export const StepsDev = () => {
  return (
    <div className="flexContainer">
      <Heading title={title} subTitle={subTitle} />
      <div className="firsLine">
        {stepsDevDatafirst.map((item, index) => (
          <>
            <div key={index} className="flexItem">
              <div className="roundcontent">
                <div className="roundItem">
                  <img src={item?.img} alt="stepItem" />
                </div>
                <p>{item?.subtitle}</p>
              </div>
            </div>
            {index !== stepsDevDatafirst.length - 1 ? (
              <SmallBalls length={17} />
            ) : null}
          </>
        ))}
      </div>
      <div className="verticalCycles">
        <div className="verticalCycleItem">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="smallRound right"></div>
          ))}
        </div>
      </div>

      <div className="secondLine">
        {" "}
        {stepsDevDatasecond.map((item, index) => (
          <>
            <div key={index} className="flexItem">
              <div className="roundcontent">
                <div className="roundItem">
                  <img src={item?.img} alt="stepItem" />
                </div>
                <p>{item?.subtitle}</p>
              </div>
            </div>
            {index !== stepsDevDatasecond.length - 1 ? (
              <SmallBalls length={17} />
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};

export const MobileStepsDev = () => {
  return (
    <div className="flexContainer">
      <Heading title={title} subTitle={subTitle} />

      <div className="firsLine">
        {stepsDevDataMobile.map((item, index) => (
          <>
            <div key={index} className="flexItem">
              <div className="roundcontent">
                <div className="roundItem">
                  <img src={item?.img} alt="stepItem" />
                </div>
                <p>{item?.subtitle}</p>
              </div>
            </div>
            {index !== stepsDevDataMobile.length - 1 ? (
              <SmallBalls length={3} />
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};

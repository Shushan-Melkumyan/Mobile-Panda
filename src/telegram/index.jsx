import "./styles.css";
import telegramPhoto from "./telep.png";
import { Button } from "../button";
import { Heading } from "../heading";

const mobile = window.innerWidth < 810;

export const WeOnTelegram = () => {
  const titleBtn = "обсудить в Telegram";
  const title = "мы в Telegram";
  const subTitle = "Быстрая и удобная коммуникация с нашей командой";
  return (
    <div className="videoConferencesContainer">
      <Heading title={title} subTitle={subTitle} />
      <div className="connectionContent">
        <div className="left-side">
          <div className="telegConect">
            <h2>Свяжись с нами в TELEGRAM</h2>
            <p className="subtitle">
              Обсудим с вами сроки, стоимость и детали реализации проекта
            </p>
          </div>
          {!mobile && <Button title={titleBtn} />}
        </div>

        <div className="right-side">
          <img src={telegramPhoto} alt="#telegram" className="bearImg" />
        </div>
        {mobile && <Button title={titleBtn} />}
      </div>
    </div>
  );
};

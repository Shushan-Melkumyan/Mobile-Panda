import "./styles.css";
import bear from "./bear.png";
import { Button } from "../button";
import { Input } from "../input";
import { Heading } from "../heading";

const mobile = window.innerWidth < 810;

export const VideoConferences = () => {
  const titleBtn = "назначить встречу";
  const inputProps = {
    type: "text",
    title: "Заполните все обязательные поля",
    placeholder: "Введите телефон или почту",
    color: "#ff005a",
  };
  const title = "Видео-конференция";
  const subTitle = "мы много слушаем, мало спрашиваем, много советуем";

  return (
    <div className="videoConferencesContainer">
      <Heading title={title} subTitle={subTitle} />
      <div className="connectionContent">
        <div className="left-side">
          <h2 className="conectionHeader">Организуем встречу по видеосвязи</h2>
          <p className="subtitle">
            Оставьте заявку и получите ответы на любые ваши вопросы.
            Познакомимся и расскажем, как мы работаем.
          </p>
          <div className="inputContainer">
            <Input props={inputProps} />
          </div>
          {!mobile && <Button title={titleBtn} />}
        </div>
        <div className="right-side">
          <img src={bear} alt="#bear" className="bearImg" />
        </div>
        {mobile && <Button title={titleBtn} />}
      </div>
    </div>
  );
};

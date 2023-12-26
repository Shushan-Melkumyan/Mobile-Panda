import "./styles.css";
import { Button } from "../button";
import { Input } from "../input";
import { Heading } from "../heading";

export const Questions = () => {
  const titleBtn = "Заказать разработку";
  const inputPropsName = {
    type: "text",
    placeholder: "Имя",
  };
  const inputPropsPhone = {
    type: "text",
    title:
      "нажимая на кнопку, вы даете согласие на обработку персональных данных",
    placeholder: "Телефон, телеграм или почта*",
    color: "#ffffff",
  };
  const title = "Остались вопросы?";
  const subTitle = "МЫ ВСЕГДА ЗДЕСЬ, ЧТОБЫ ПОМОЧЬ ВАМ РАЗОБРАТЬСЯ";
  return (
    <div className="questionContainer">
      <Heading title={title} subTitle={subTitle} />
      <div className="questionContent">
        <div className="modalContent">
          <h2>ОСТАВЬТЕ ДАННЫЕ ДЛЯ СВЯЗИ</h2>
          <Input props={inputPropsName} />
          <Input props={inputPropsPhone} />
          <Button title={titleBtn} />
        </div>
      </div>
    </div>
  );
};

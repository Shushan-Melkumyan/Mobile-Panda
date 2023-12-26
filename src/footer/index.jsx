import "./styles.css";
import { Logo } from "../logo";
import telegramLogo from "./tg.png";
import vkLogo from "./vk.png";
export const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="phone">+7 (960) 599-73-55</div>
      <div className="adress">Г.Тула, ул. Циолковского, д 14</div>
      <div className="mail">mobilepandasstudio@gmail.com</div>
      <div className="icons">
        <span>
          <img src={telegramLogo} alt="telegramLogo" />
        </span>
        <span>
          <img src={vkLogo} alt="vkLogo" />
        </span>
      </div>
    </div>
  );
};

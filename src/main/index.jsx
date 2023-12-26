import { Button } from "../button";
import "./styles.css";

export const Main = () => {
  const title = "Рассчитать стоимость";
  return (
    <div className="container">
      <h1 className="developmentTitle">Разработка</h1>
      <h1 className="mobApp">Mобильных приложений</h1>
      <div className="subtitle">
        <h3>разрабатываем</h3>
        <h3>приложения для</h3>
      </div>
      <h3 className="startup">бизнеса и стартапов</h3>
      <Button title={title} />
    </div>
  );
};

import "./styles.css";

export const Heading = ({ title, subTitle }) => {
  return (
    <div className="heading">
      <h2 className="titleContainers">{title}</h2>
      <h3 className="subTitleContainers">{subTitle}</h3>
    </div>
  );
};

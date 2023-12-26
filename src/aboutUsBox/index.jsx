import "./styles.css"

export const AboutUsBox = ({ title, subTitle }) => {
  return (
    <div className="aboutUsBox">
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  );
};

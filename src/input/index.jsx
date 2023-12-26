import "./styles.css";
export const Input = ({ props }) => {
  const { title, placeholder, type, color } = props;
  return (
    <div className="inputContainer">
      <input type={type} className="input" placeholder={placeholder} />
      {title ? (
        <p className="requiredFieldsText" style={{ color: color }}>
          {title}
        </p>
      ) : null}
    </div>
  );
};

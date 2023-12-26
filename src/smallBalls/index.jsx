import "./styles.css";

export const SmallBalls = ({ length }) => {
  return (
    <div className="smallCycles">
      {Array.from({ length }).map((_, i) => (
        <div key={i} className="smallRound right"></div>
      ))}
    </div>
  );
};

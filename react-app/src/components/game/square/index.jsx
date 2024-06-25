import "./styles.scss";

export const Square = ({ value, id, handleClick }) => {
  return (
    <div className="square" onClick={() => handleClick(id)}>
      {value}
    </div>
  );
};

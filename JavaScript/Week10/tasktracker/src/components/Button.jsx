const Button = ({ text, color, click }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={click}>
      {text}
    </button>
  );
};

export default Button;

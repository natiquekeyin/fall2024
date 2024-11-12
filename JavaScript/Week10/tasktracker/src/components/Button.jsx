import { FaPlus } from "react-icons/fa";

const Button = ({ text, color, click }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={click}>
      {" "}
      <FaPlus />
      {text}
    </button>
  );
};

export default Button;

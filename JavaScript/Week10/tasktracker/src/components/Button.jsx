import { FaPlus } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";

const Button = ({ text, color, click, showAdd }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={click}>
      {showAdd ? <FaPlus /> : <FaCheckDouble />}
      {text}
    </button>
  );
};

export default Button;

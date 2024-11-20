import { FaPlus } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import { motion } from "framer-motion";

const Button = ({ text, color, click, showAdd }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={click}
      >
        {showAdd ? <FaPlus /> : <FaCheckDouble />}
        {text}
      </button>
    </motion.div>
  );
};

export default Button;

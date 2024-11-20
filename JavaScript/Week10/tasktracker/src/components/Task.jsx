import { FaAccusoft, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <motion.div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1.0 } }}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", marginLeft: "10px" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
      <p>
        {" "}
        <Link to={`/task/${task.id}`}>View Details</Link>
      </p>
    </motion.div>
  );
};

export default Task;

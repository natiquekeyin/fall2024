import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { FaCheckDouble } from "react-icons/fa";

const TaskDetails = () => {
  const { pathname } = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);

      if (res.status === 404) {
        setError("Task not found");
      }

      const data = await res.json();
      setTask(data);
      setLoading(false);
    };

    fetchTask();
  });

  if (error) {
    navigate("/");
  }
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1.0 } }}
    >
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="task detail">
          <p style={{ color: "black", textDecoration: "underline" }}>
            {pathname}
          </p>
          <h3>{task.text}</h3>
          <p>{task.day}</p>
          {/* <Button
            text="Go Back"
            click={() => {
              navigate(-1);
            }}
          /> */}

          <button
            className="btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            <FaCheckDouble /> Go Back
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default TaskDetails;

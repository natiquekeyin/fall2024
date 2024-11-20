import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./components/About";
import TaskDetails from "./components/TaskDetails";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);
  // fetch the tasks from server...
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // fetch ONE task from task from the server...

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // TO delete a task from tasks...
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    // update our UI
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TO toggle the reminder of each task...
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        // task.id === id ? { ...task, reminder: !task.reminder } : task
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // To add a task in current tasks
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000 + 1);

    // to make a POST request to our json server, for posting the new task that was passed to addTask function....
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
    // ...tasks means bring previous tasks... ,data means now update the tasks with this data ....
    // FROM HERE WE WILL START NEXT WEEK...

    // const id = tasks.length + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No tasks to show!!!"
                )}
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>

        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/test1" className="link">
          Test1
        </Link>
        <Link to="/test2" className="link">
          Test2
        </Link>
        <Link to="/test3" className="link">
          Test3
        </Link>
        <Footer />
      </div>
    </Router>
  );
}

// && logical AND... both sides should be true for a true output.. if either side is false...the output is false....

// We will setup our own server to test our api calls...
// a json server...that will have all the tasks on it and we will just fetch the tasks from the server and show them here.. and make other api calls like... get,post, put, and delete...

export default App;

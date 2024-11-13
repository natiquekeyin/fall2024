import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: "Interview", day: "December 2,2024", reminder: true },
    { id: 2, text: "GYM", day: "December 28,2024", reminder: false },
    {
      id: 3,
      text: "Doctor's Appointment",
      day: "January 2,2025",
      reminder: true,
    },
  ]);

  // TO delete a task from tasks...
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TO toggle the reminder of each task...
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // To add a task in current tasks
  const addTask = (task) => {
    // const id = Math.floor(Math.random() * 10000 + 1);

    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show!!!"
      )}
    </div>
  );
}

// && logical AND... both sides should be true for a true output.. if either side is false...the output is false....

// We will setup our own server to test our api calls...
// a json server...that will have all the tasks on it and we will just fetch the tasks from the server and show them here.. and make other api calls like... get,post, put, and delete...

export default App;

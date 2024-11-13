import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show!!!"
      )}
    </div>
  );
}

export default App;

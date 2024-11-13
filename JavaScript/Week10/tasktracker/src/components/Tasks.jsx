import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        // <h3 key={task.id}>{task.text}</h3>
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

// In react unless we use redux (later on), the state variables and functions should be always defined in App component, and then passed as props to different components. TO MAKE THEM GLOBAL...

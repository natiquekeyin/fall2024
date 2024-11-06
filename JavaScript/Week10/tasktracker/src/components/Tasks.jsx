const tasks = [
  { id: 1, text: "Interview", day: "December 2,2024", reminder: true },
  { id: 2, text: "GYM", day: "December 28,2024", reminder: false },
  {
    id: 3,
    text: "Doctor's Appointment",
    day: "January 2,2025",
    reminder: true,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;

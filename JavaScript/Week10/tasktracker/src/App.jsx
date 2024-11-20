import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <AnimatedRoutes showAddTask={showAddTask} />
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

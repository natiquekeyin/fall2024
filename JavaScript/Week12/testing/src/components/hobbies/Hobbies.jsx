import { useState, useEffect } from "react";

const Hobbies = ({ hobbies }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1800);
  }, []);
  return (
    <>
      <div>My Hobbies</div>
      <ul>
        {hobbies.map((hobby) => {
          return <li key={hobby}>{hobby}</li>;
        })}
      </ul>

      {isLoggedIn ? (
        <button>Start Hobbies</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}> Login</button>
      )}
    </>
  );
};

export default Hobbies;

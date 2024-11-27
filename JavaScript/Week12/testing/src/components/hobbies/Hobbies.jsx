import { useState } from "react";

const Hobbies = ({ hobbies }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

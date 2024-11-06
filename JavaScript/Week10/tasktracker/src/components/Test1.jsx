import { useState } from "react";

const Test1 = () => {
  const [x, setX] = useState(0);
  const [name, setName] = useState("Eugene");
  //   useState(0) has initialized a state variable "x" to 0 and provided a function setX() to manipulalte the value of x.

  return (
    <>
      <p>The value of x is {x}</p>
      <p>Welcome {name}!</p>
      <button
        onClick={() => {
          setX(x + 1);
          setName("Kepich");
        }}
      >
        Increment
      </button>
      <p>The value of x is {x}</p>
      {(document.title = x)};
    </>
  );
};

export default Test1;

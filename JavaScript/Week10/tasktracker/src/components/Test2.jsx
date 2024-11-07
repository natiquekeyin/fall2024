// Updating object state data...
// we will start with array data in next class

import { useState } from "react";
import Button from "./Button";

const Test2 = () => {
  const obj = {
    name: "Alan Smith",
    age: 20,
    height: 5.1,
    isYoung: true,
  };

  const [person, setPerson] = useState(obj);

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>

      {/* <button
        onClick={() => {
          setPerson((previousState) => {
            return {
              ...previousState,
              name: "Bob Smith",
              age: 33,
            };
          });
        }}
      >
        Change
      </button> */}

      <Button
        text="Change"
        color="green"
        click={() => {
          setPerson((previousState) => {
            return {
              ...previousState,
              name: "Bob Smith",
            };
          });
        }}
      />
    </div>
  );
};

export default Test2;

// Use set stat to udpate arrays...
import { useState } from "react";

const Test3 = () => {
  let num = [11, 22, 33, 55];
  let [numbers, setNumbers] = useState(num);

  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <div key={index}>
            <li>{number}</li>
          </div>
        ))}
      </ul>
      <button
        onClick={() => {
          setNumbers((previousState) => {
            return [...previousState, Math.floor(Math.random() * 50)];
          });
        }}
      >
        Change Array
      </button>
    </div>
  );
};

export default Test3;

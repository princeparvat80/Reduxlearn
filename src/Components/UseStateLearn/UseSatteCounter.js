import React from "react";
import { Button } from "@mui/material";

export default function UseSatteCounter() {
  const [counter, setCounter] = React.useState(0);
  const [printInput, setprintInput] = React.useState("");

  const decrement = () => {
    setCounter(counter - 1);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const handelChanges = (e) => {
    console.log(e.target);
    setprintInput(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <h1>Increment/decrement counter using State</h1>
        <div className="quantity">
          <Button className="quantity__minus" onClick={decrement}>
            <span>-</span>
          </Button>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={counter}
          />
          <Button className="quantity__plus" onClick={increment}>
            <span>+</span>
          </Button>
        </div>
      </div>
      <form className="container">
        <label>
          Name:
          <input type="text" name="name" onChange={handelChanges} />
        </label>
      </form>

      <h1 className="container">{printInput}</h1>
      <h1 className="container">{counter}</h1>

    </div>
  );
}

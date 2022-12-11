import React from "react";
import { useSelector } from "react-redux";

export default function Multi() {
  const myState = useSelector((state) => state.RootReducers.changeTheNumber);

  return (
    <div className="container">
      <h1>Prince</h1>
      <form>
        Enter the Number:
        <br /> <input type="text" name="name"  />
        <br />
        Number from Redux:
        <br /> <input type="text" name="subject" value={myState}/>
        <br />
        output:
        <br /> <input type="text" name="rank" />
      </form>
    </div>
  );
}

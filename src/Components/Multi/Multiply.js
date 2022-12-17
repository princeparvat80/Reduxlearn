import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultiDispatch } from "./Redux/action";

export default function Multi() {
  const myState = useSelector((state) => state.RootReducers.changeTheNumber);
  const MultipliedState = useSelector(
    (state) => state.RootReducers.Multi_Reducer
  );
  const dispatch = useDispatch();

  const handleChanges = (event) => {
    dispatch(MultiDispatch(event.target.value));
  };

  return (
    <div className="container">
      <h1 >Component 2</h1>
      <form>
        Enter the Number:
        <br /> <input type="number" name="name" onChange={handleChanges} />
        <br />
        Number from Redux:
        <br /> <input disabled type="number" name="subject" value={myState} />
        <br />
        Multiplied output:
        <br />{" "}
        <input disabled type="number" name="rank" value={MultipliedState} />
      </form>
    </div>
  );
}

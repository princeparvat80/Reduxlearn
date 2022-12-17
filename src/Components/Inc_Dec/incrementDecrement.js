import React from "react";
import { Button } from "@mui/material";
import "./incrementDecrement.module.css";
import { useDispatch, useSelector } from "react-redux";
import {incNum,decNum} from "./Redux/action"

export default function IncrementDecrement  () {
  const myState = useSelector((state)=>state.RootReducers.changeTheNumber)
  const dispatch = useDispatch();

  const increment = () => {
    return dispatch(incNum()) ;
  };

  const decrement = () => {
    return dispatch(decNum());
  };

  return (
    <div className="container">
       <h1>Component 1</h1>
      <h2>Increment/decrement counter</h2>
      <div className="quantity">
        <Button className="quantity__minus" onClick={decrement}>
          <span>-</span>
        </Button>
        <input
          name="quantity"
          type="text"
          className="quantity__input"
          value={myState}
        />
        <Button className="quantity__plus" onClick={increment}>
          <span>+</span>
        </Button>
      </div>
    </div>
  );
}

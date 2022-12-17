import React from 'react';
import './App.css';
import  IncrementDecrement from "./Components/Inc_Dec/incrementDecrement";
import  Multi from "./Components/Multi/Multiply";
import UseSatteCounter from './Components/UseStateLearn/UseSatteCounter'

function App() {
  return (
   <>
    <IncrementDecrement />
    <Multi />
    <UseSatteCounter />
   </>
  );
}

export default App;

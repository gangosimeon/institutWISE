// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './essai/person.css';
import Person from './essai/Person';
  function App() {
    const Greeting = ({ name }) => {
      return <h1>Hello, {name}!</h1>;
  };

  const name = "Siméon";
  const [count, setCount] = useState(0);

  function incrementValue() {
    setCount(count + 1);
  }
  function decrementValue() {
    setCount(count - 1);
  }
  return <>
    <Greeting name={name} />
    <div className="increment">
      <button onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
    </div>
    <div className="counter">
      <p>{count}</p>
    </div>
    <Person />
  </>

}

export default App;

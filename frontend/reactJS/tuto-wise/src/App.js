// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './essai/users.css';
import MyForm from './MyForm';                                                                        
import Header from './component/Header';


function App() {

  const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;

  const name = "Siméon";
  const [count, setCount] = useState(0);

  function incrementValue() {
    setCount(count + 1);
  }
  function decrementValue() {
    setCount(count - 1);
  }
  return <>
    <Header />
    <Greeting name={name} />
    <div className="increment">
      <button onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
    </div>
    <div className="counter">
      <p>{count}</p>
    </div>
    <MyForm />
  </>
}

export default App;
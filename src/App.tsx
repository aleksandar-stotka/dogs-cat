import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';

function App() {
  const personName ={
    first: "Bruce",
    last: "Wain"
  }
  return (
    <div className="App">
      <Greet name="aleksandar" messageCount={10} isLogin={false}/>
      <Person name={personName}/>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName ={
    first: "Bruce",
    last: "Wain"
  }
  const list = [
    {
      first: 'Bruce',
      last: "Wayne"
    },
    {
      first: 'Klark',
      last: "Kent"
    },
    {
      first: 'Mario',
      last: "Joshi"
    }
  ]
  return (
    <div className="App">
      <Greet name="aleksandar" messageCount={10} isLogin={false}/>
      <Person name={personName}/>
      <PersonList names={list}/>
    </div>
  );
}

export default App;
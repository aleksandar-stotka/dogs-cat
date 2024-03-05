import React from 'react';
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="aleksandar" messageCount={10} isLogin={false}/>
    </div>
  );
}

export default App;
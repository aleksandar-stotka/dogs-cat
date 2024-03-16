import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greet from './components/Greet';
import Person from './components/Person';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greet />} />
        <Route path="/person" element={<Person/>} />
      </Routes>
    </Router>
  );
}

export default App;
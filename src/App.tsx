import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login  />} />
      </Routes>
    </Router>
  );
}

export default App;
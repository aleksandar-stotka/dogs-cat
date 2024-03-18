import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About  />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login  />} />
      </Routes>
    </Router>
  );
}

export default App;
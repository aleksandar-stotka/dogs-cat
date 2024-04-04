import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import LoginForm from './pages/login/Login';
import Products from './pages/Products';
import Signup from './pages/signup/Signup';

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About  />} />
        <Route path="/products" element={<Products />} />
          <Route path="/login" element={<LoginForm  />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
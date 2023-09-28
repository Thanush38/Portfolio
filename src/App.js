import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Contact from './pages/Contact';
import Home from './pages';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/Contact" element={<Contact/>}  />

    </Routes>
    </Router>
  );
}

export default App;

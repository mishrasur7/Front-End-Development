import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, 
  Routes, 
  Route, 
  Link
} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
  <div className='App'>
    <h1 style={{backgroundColor: 'black', color: 'white', height: 50, margin: 'auto'}}>Welcome to React Router</h1>
    <BrowserRouter>
      <Link to="/">Home</Link>{' '}
      <Link to="/about">About</Link>{' '}
     <Link to="/contact">Contact</Link>{' '}
      <Routes>
       <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div> 
  );
}

export default App;

import React from 'react';
import './index.css';
import DataFetching from './Components/DataFetching';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';


function App() {
  return (
   <div className='App'>
      <Router>
        <nav className='navigation'>
          <Link className='links' to="/">Home</Link>
          <Link className='links' to="/About">About</Link>
          <Link className='links' to="/Gallery">Gallery</Link>
          <button className='navbtn'>Show More</button>
        </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      
      
      <Home />
      <About />
      <Gallery />


    </Router>

    <DataFetching />
    
   </div>

    
    
    
  );
}

export default  App;

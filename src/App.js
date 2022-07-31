import React from 'react';
import './App.css';
import DataFetching from './Components/DataFetching';

function App() {
  return (
    <div className="App">
      <section id="Navbar">
        <div class="Navlinks">
            <ul>
              <li> <a href=".">Home</a> </li>
              <li> <a href=".">About</a> </li>
              <li> <a href=".">Gallery</a></li>
              <li> <a href=".">ContcatUs</a> </li>
              </ul>
              </div>
              <button id="Navbtn">See More!</button>
              </section>

     <DataFetching />
    </div>
  );
}

export default App;

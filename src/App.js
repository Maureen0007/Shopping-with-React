import React,{useState} from 'react';
import './index.css';
// import DataFetching from './Components/DataFetching';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Form from './Components/Home';
function App() {
  const [active, setActive] = useState("Home");

  return(
    <div className='App'>
      <nav className='navbtn'>
        <button onClick={()=> setActive("Form")}>Home</button>
        <button onClick={()=> setActive("About")}>About</button>
        <button onClick={()=> setActive("Gallery")} >Gallery</button>
      </nav>
      <div>
        {active === "Form" && <Form title="" />}
        {active === "About" && <About title="" />}
        {active === "Gallery" && <Gallery title="" />}
      </div>
    </div>
  )
  
}

export default App;

// const ShowAndHide = () =>{
//   const pages = ["Home", "About", "Gallery"];
//   const [myPages, setMyPages]= useState('');

//   return(
//     <>
//     <div className='group-btn'>
//       {pages.map(pages=>(
//         <button type='button' key={pages} className={"btn btn-light border-dark"}
//         onClick={()=> setMyPages(pages) }
//         >
//           {pages.toLocaleUpperCase()}
//         </button>
//         ))}
//     </div>
//     <div className='group-text'>
//       {myPages}
//     </div>
//     <Home />
//     <About />
//     <Gallery />
//     </>
    

//   )
// }

// export default ShowAndHide;


// function App() {
//   const [state, setState]=useState(false)
//   return (
//    <div className='App'>
//       <Router>
//         <nav className='navigation'>
//           <Link className='links' to="/">Home</Link>
//           <Link className='links' to="/About">About</Link>
//           <Link className='links' to="/Gallery">Gallery</Link>
//           <button className='navbtn'>Show More</button>
//         </nav>
//       <Routes>
//         <Route path="/Home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Gallery" element={<Gallery />} />
//       </Routes>
      
      
//       <Home />
//       <About />
//       <Gallery />


//     </Router>

//     {/* <DataFetching /> */}
    
//    </div>

    
    
    
//   );
// }

// export default  App;

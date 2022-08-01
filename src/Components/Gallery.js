import React, {useState, useEffect} from 'react'
import '../index.css'

const Gallery=()=> {

    const [post, setPost] = useState([]);
    console.log(post);


    useEffect(()=>{

    const fakestore= async()=>{
        const response = await fetch("https://fakestoreapi.com/products")
        
        const jsonData = await response.json();
        setPost(jsonData);
    }
        fakestore(); 
    },[]);

    // const fakestore= async()=>{
    //     const response = await fetch("https://fakestoreapi.com/products")
        
    //     const jsonData = await response.json();
    //     setPost(jsonData);
    // }
    // fakestore();

  return (
    <>
         <h1>Shop with React</h1>
         <div className='container'>
             <div className='card'>
                 <div className='content'>
                     <h2>Title</h2>
                     <p>Description</p>
                 </div>
                 <h3>image</h3>
             </div>
             
         </div>
    </>
  )
}

export default Gallery
import React, {useState, useEffect} from 'react'
import '../index.css'

 const Gallery=()=>{

     const [post, setPost]=useState([0]);
    useEffect(()=>{
        const fakestore =async()=>{
            const response= await fetch("https://fakestoreapi.com/products")
            const jsonData= await response.json();
            setPost(jsonData)
        }
          fakestore();
             },[])
    return(
         <>
         <h1 className='gallery-title'>Shopping With React</h1>
         <div className='container'>
             {post.map((values)=>{
                 return(
                     <>
                     <div className='card'>
                         <div className='content'>
                             <h3>{values.title}</h3>
                             <p>{values.description}</p>
                         </div>
                         <img src={values.image} alt=""  />
                     </div>
                     </>
                 )
             })}
         </div>

         </>
    )
}
    

export default Gallery
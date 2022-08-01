import React, {useState}from 'react'
// import Axios from 'axios'

function DataFetching() {

    const [post, setPost]= useState("")

    const getData = () =>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=> response.json())
        .then((data)=>{
            setPost(data.category + "..." + data.title);

        })

    }

    return (
        <div>
            <button onClick={getData}>Get outfit</button>
            {post}
        </div>

    )

    
    }
export default DataFetching;
import React, {useState, useEffect}from 'react'

function DataFetching() {
    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch(err =>{
                console.log(err)
            })

    },[])
    return(
        <div>

        </div>
    )
    
}

export default DataFetching
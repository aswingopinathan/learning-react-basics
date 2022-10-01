import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)
    useEffect(()=>{
        console.log("Mounting...");
        console.log("Updating..."+count);
        console.log("Updating..."+count1); 
    },[count,count1])
    
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <h1>Hello I am the 1st Component: {count}</h1>

        <button onClick={()=>{setCount1(count1+1)}}>Increment</button>
        <h1>Hello I am the 2nd Component: {count1}</h1>
    </div>
  )
}

export default Counter
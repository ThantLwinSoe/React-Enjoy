import React from 'react'
import { useState } from 'react';

export default function CounterComponents() {
    const [count,setCount] = useState(0);

    function addCount(){
        setCount(count + 1)
    }

    function minusCount() {
        setCount(count - 1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={addCount}>Add</button>
        <button onClick={minusCount}>Add</button>
    </div>
  )
}

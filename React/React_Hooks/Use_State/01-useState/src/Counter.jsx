

import React, { useState } from 'react'

export const Counter = () => {

    const [counter,setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    function reset() {
        setCounter(0);
    }

  return (

    <>
        <div>{counter}</div>
        <div>
            <button onClick={increment}>Increment</button>
        </div>
        <div>
            <button onClick={decrement}>Decrement</button>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    </>
    
  )
}

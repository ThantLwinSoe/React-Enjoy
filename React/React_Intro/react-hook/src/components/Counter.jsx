import React, { useState ,useEffect} from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    let increment = () => setCount(count + 5);
    let decrement = () => setCount(count -1 );
    let reset = () => setCount(0);

    useEffect( () => {
        document.title =`You click ${count} times`;
    });

  return (
    <div>
        <h1>Counter is : {count}</h1>
        {/* <button onClick={ () => setCount(count + 1)}>Change Count</button> */}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={ reset}>Reset Count</button>
    </div>
  )
}

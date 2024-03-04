import { useState } from "react";

function Counter() {

    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count + 1) 
    }

    const drecement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className="counter-container">
            <div className="counter-display">{count}</div>
            <button className="counter-button" onClick={drecement}>Drecrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}
export default Counter
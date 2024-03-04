import React, { useEffect, useState } from 'react'

export default function ConditionallyUseEffect() {

    const [count,setCount] =  useState(0);
    const [name,setName] = useState("");

    useEffect(
        () => {
            document.title=`you clicked: ${count} times`;
            console.log('UseEffect is called.')
        }
    )

  return (
    <div>
        <h4>{count}</h4>
        <button onClick={ () => setCount(count + 1)}>+</button>

        <input type="text"  value={name}
        onChange={ (e) => setName(e.target.value)}/>

        <div>{name}</div>
    </div>
  )
}

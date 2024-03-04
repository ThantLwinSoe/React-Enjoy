import React, { useState } from 'react'

export default function ArraysAsState() {
const [item,setItem] = useState([]);
const [furit,setFurit] = useState([]);

let addItems = () =>{ setItem([...item, furit]) }

  return (
    <div>
        <h2>Add Furits</h2>
        <input type="text" value={furit} 
        onChange={ (e) => setFurit(e.target.value)} />
        <button onClick={addItems}>Add Items</button>
        <ul>
            {
                item.map(
                    (i) => (  <li key={i}>{i}</li> )    
                )
            }
        </ul>
    </div>
  )
}

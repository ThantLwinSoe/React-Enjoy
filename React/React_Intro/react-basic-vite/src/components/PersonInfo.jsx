import React from 'react'
import Data from './Data'

export default function PersonInfo(props) {
  console.log(props);
  return (
    <div>
      <Data name={props.name} age={props.age} country={props.country}></Data>
      <h1>{props.children}</h1>
    </div>
  )
}

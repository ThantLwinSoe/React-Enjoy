import React from 'react'

export default function ProductComponent({id,name,price,className}) {
  return (
    <div style={{textAlign:'center'}}>
        <h3 className={className}>Product Id : {id}</h3>
        <h3 className={className}>Product Title : {name}</h3>
        <h3 className={className}>Costs : ${price}</h3>
    </div>
  )
}

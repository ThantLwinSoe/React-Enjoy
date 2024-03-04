import React from 'react'
import ProductComponent from './ProductComponent';

export default function ListComponent(props) {
    const className = props.primary ? 'primary' : 'secoundary'
    const employees = ['daisy','Alex','john','harry'];

    const product=[
        {
            id:1,
            name:"Apple",
            price:25.3
        },
        {
            id:2,
            name:"Orange",
            price:35.3
        },
        {
            id:3,
            name:"Banana",
            price:15.3
        }
    ]


  return (
    <div>
        {
            product.map(
                (product) => {
                    return <ProductComponent className={className} key={product.id} 
                    id={product.id} name={product.name} price={product.price}>

                    </ProductComponent>
                    
                }
                
            )
        }
    </div>
  )
}

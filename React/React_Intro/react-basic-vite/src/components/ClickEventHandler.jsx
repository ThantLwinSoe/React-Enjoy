import React from 'react'

export default function ClickEventHandler() {

    const myFun = () =>
        console.log('You Clicked Click Button')

  return (
    <div>
        <button onClick={myFun}>Click</button>
    </div>
  )
}

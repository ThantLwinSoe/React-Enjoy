import { useState } from "react"


function App() {

  const [name,setName] = useState('Guest')
  const [comment,setComment] = useState('Say Something')
  const [payment,setPayment] = useState('Visa')
  const [shipping,setShipping] = useState('Pick Up')

  const changeName = (e) => {
    setName(e.target.value);
  }

  const changePayment = (event) => {
    setPayment(event.target.value)
  }

  function changeComment(event) {
    setComment(event.target.value)
  }

  function changeShipping(e) {
    setShipping(e.target.value)
  }
  
  return (
    <>
      <div className="container">
        <label className="display" >Name : {name}</label><br />
        <input type="text" value={name} onChange={changeName}/>
      </div>

      <div className="container">
        <label className="display" htmlFor="comment">Comment Here : {comment}</label><br />
        <textarea value={comment} name="comment" id="comment" onChange={changeComment} cols="30" rows="10"></textarea>
      </div>

      <div className="container">
        <div className="display">Payment: {payment}</div>
        <select onChange={changePayment} value={payment}>
          <option value="">Select Option</option>
          <option value="Visa">Visa</option>
          <option value="Master Card">Master Card</option>
          <option value="MPU">MPU</option>
          <option value="JCB">JCB</option>
        </select>
      </div>

      <div className="container">
        <div>Shipping : {shipping}</div>
        <div>
          <input type="radio" value="Pick Up" checked={shipping === 'Pick Up'} onChange={changeShipping}/>
          Pick Up
        </div>
        <div>
          <input type="radio" value="Delivery" checked={shipping === 'Delivery'} onChange={changeShipping}/>
          Delivery
        </div>
      </div>
    </>
  )
}

export default App

import Drink from "./Drink.jsx"
import Food from "./Food.jsx"

function App() {

  const fruits = [
      {id:1,name:"apple-cake",category:"food"},
      {id:2,name:"orange-juice",category:"drink"},
      {id:3,name:"pipeapple-cake",category:"food"},
      {id:4,name:"watermalon-smooth",category:"drink"}
    ]


  return (
    <>
      <h3>Food</h3>
      <Food fruit={fruits}></Food>
      <h3>Drink</h3>
      <Drink fruit={fruits}></Drink>
    </>
  )
}

export default App

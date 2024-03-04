import { useState } from "react"

function App() {

  const [name,setName] = useState("Guest")

  const changeName = () => {
    setName("Thant");
  }

  const [count,setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={changeName}>Change Name</button>

        <p>Log in time : {count}</p>
        <button onClick={increment}>Show Login time</button>
      </div>
    </>
  )
}

export default App

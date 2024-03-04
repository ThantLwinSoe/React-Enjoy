import Employee from "./Employee"


function App() {
  
  const data = [
    {
        name: "Alex",
        age: 25,
        salary: "2500$"
    },
    {
        name: "Jhonny",
        age: 28,
        salary: "4500$"
    },
    {
        name: "Byan",
        age: 30,
        salary: "5500$"
    }
  ]

  const greet = "Hello Click Event"

  return (
    <>
      <Employee saySomething={greet}/>
    </>
  )
}

export default App

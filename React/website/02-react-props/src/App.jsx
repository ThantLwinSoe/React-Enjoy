import Student from "./Student"

function App() {


  return (
    <>
      <Student  name="Thant" age={25} isStudent={true}></Student>
      <Student />
      <Student name="Hmue" age={24} isStudent={true}></Student>
    </>
  )
}

export default App

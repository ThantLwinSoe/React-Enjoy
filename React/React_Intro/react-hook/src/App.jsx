import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ObjectAsState from './components/ObjectAsState'
import ArraysAsState from './components/ArraysAsState'
import ConditionallyUseEffect from './components/ConditionallyUseEffect'
import UseEffect3 from './components/UseEffect3'
import UnmountComponent from './components/UnmountComponent'
import EmployeeTable from './components/EmployeeTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Counter></Counter> */}
      {/* <ObjectAsState></ObjectAsState> */}
      {/* <ArraysAsState></ArraysAsState> */}
      {/* <ConditionallyUseEffect></ConditionallyUseEffect> */}
      {/* <UseEffect3></UseEffect3> */}
      {/* <UseEffect3></UseEffect3> */}
      {/* <UnmountComponent></UnmountComponent> */}
      <EmployeeTable></EmployeeTable>
    </div>
  )
}

export default App

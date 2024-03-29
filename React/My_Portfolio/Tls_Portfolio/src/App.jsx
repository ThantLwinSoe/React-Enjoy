import { Route, Routes, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import './App.scss';


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

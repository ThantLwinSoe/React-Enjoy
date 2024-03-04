import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComponents from './Components/HelloComponents'
import TopNav from './Components/TopNav'
import Featured from './Components/Featured'
import { Delivery } from './Components/Delivery'
import TopPicks from './Components/TopPicks'
import Meal from './Components/Meal'
import Categories from './Components/Categories'
import NewsLetters from './Components/NewsLetters'
import Footers from './Components/Footers'

function App() {
 

  return (
    <>
      <TopNav></TopNav>
      <Featured></Featured>
      <Delivery></Delivery>
      <TopPicks></TopPicks>
      <Meal></Meal>
      <Categories></Categories>
      <NewsLetters></NewsLetters>
      <Footers></Footers>
    </>
  )
}

export default App

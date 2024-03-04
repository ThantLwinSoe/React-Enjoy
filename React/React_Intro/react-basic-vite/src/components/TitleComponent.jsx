import { useState } from "react"


export default function TitleComponent() {
    const [title,setTitle] = useState('React Developer...')
  return (
    <div>
       <h1>{title}</h1>
       <button style={{color:"black"}} onClick={() => setTitle('Java Developer')}>Change Title</button> 
    </div>
  )
}

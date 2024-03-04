

export default function Data(props) {
  return (
    <div>
      <h1 style={{color : "lightcyan" , fontSize : "5rem"}}>Hello {props.name}</h1>
      <h1 style={{backgroundColor : "lightgreen"}}>Age : {props.age}</h1>
      <h3>Country  {props.country}</h3>
    </div>
  )
}

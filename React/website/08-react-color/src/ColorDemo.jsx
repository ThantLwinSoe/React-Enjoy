import { useState } from "react";


function ColorDemo() {

    const [color,setColor] = useState("#ffffff");

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    return(
        <div className="container">
            <h2 className="header" style={{backgroundColor:color}}>Color: {color}</h2>

            <label htmlFor="color">Change Color:</label>
            <input type="color" value={color} onChange={changeColor} />
        </div>
    );
}

export default ColorDemo;
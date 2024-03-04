import { useState } from "react";


function Foods() {

    const [foods,setFoods] = useState([
        "Apple",
        "Orange",
        "Banana"
    ]);

    function handlerAddFoods() {
        const newFood = document.getElementById("foodName").value;

       // console.log([newFood])
     setFoods((foods)=>[...foods,newFood]);
    }

    function handlerDeleteFoods (index) {
        
        setFoods( foods.filter((_,i) => i !== index))

    }

    return(
        <div>
            <h2>Foods</h2>
            <ul>
                {
                    foods.map( (foo,index) => <li key={index} onClick={() => handlerDeleteFoods(index)}>{foo}</li> )
                }
            </ul>
            <label htmlFor="foodName">You can add foods</label><br />
            <input type="text" placeholder="enter food"  name="foodName" id="foodName"/><br />
            <button onClick={handlerAddFoods}>Add Food</button>
        </div>
    );

}

export default Foods
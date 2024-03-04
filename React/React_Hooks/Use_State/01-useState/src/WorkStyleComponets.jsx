

import React, { useState } from "react";
import styled from "styled-components";

export const WorkStyleComponents = () => {

    const [color,setColor] = useState('red');

    const [tempColor,setTempColor] = useState('');

    function onChange(event) {
        let newColor = event.target.value;
        setTempColor(newColor);
        console.log('temp color',tempColor);
    }

    function changeColor(){
        let newColor = tempColor;
        setColor(newColor);
        console.log('real color',color);
    }

    const Title = styled.h2`
    color: ${color};
    
    `;

    return(
        <>
            <Title>Hello Style Components</Title>
            <div>
                <input type="text" placeholder="Something color here ..." onChange={onChange}  />
            </div>
            <div>
                <button onClick={changeColor}>Change Color</button>
            </div>
        </>
    );
}




import React, { useState } from "react";

export const OnChange = () => {

    const [value,setValue] = useState('Hello React!!!');

    function changeValue(event) {
        let newValue = event.target.value;
        setValue(newValue);
    }

    return(
        <>
            <div>
                <input type="text" placeholder="Something type ..." onChange={changeValue} />
            </div>
            <div>
                {value}
            </div>
        </>
    );
}
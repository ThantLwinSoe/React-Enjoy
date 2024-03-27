

import React, { useReducer } from "react";

export const TestReducer = () => {

    const initalState = { count : 0, done : true}

    const [state, dispatch] = useReducer(reducer,initalState)

    function reducer(state, action) {
        // business logic here
        if(action.type === 'count-increment') {
            return {
                count : state.count + 1,
                done : !state.done 
            };
        }

    }

    function changeData(){
        dispatch({ type : 'count-increment'});
    }

    return (
        <>
            <h2>{state.count}</h2>
            <div>
                <button onClick={changeData}>Change Data</button>
            </div>
            <div>
                {state.done && <p>{state.done.toString()}</p>}
            </div>
        </>
    );
}
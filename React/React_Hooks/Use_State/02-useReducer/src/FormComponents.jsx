

import React, { useReducer } from "react";

export const FormComponents = () => {

    let tempName = '';
    let tempPhone = '';
    let tempAddress = '';

    const initState = {
        name : 'tls',
        address : 'palaw',
        phone : '0987654321'
    };

    function reducer(state,action) {
        // here business logics

        switch(action.type){
            case ('change-data') :{
                return {
                    name : action.name,
                    address : action.address,
                    phone : action.phone
                };
            }

            case('reset-data') :{
                return {
                    name : action.name,
                    address : action.address,
                    phone : action.phone
                };
            }
        }
        throw Error('Unknown action: ' + action.type)
    }

    const [state,dispatch] = useReducer(reducer,initState);

    function nameChange(event) {
        tempName = event.target.value;
    }

    function addressChange(event) {
        tempAddress = event.target.value;
    }

    function phoneChange(event){
        tempPhone = event.target.value;
    }

    function changeData() {

        dispatch({
            type : 'change-data',
            name : tempName,
            address : tempAddress,
            phone : tempPhone
        });

    }

    function resetDate() {
        dispatch({
            type : 'reset-data',
            name : initState.name,
            address : initState.address,
            phone : initState.phone
        })
    }

    return(
        <>
            <div>Hello Form Components</div>
            <div>
                <input type="text" placeholder="Something name ..."   onChange={nameChange}/>
                <input type="text" placeholder="Address ..." onChange={addressChange}/>
                <input type="tel" placeholder="Telephone ..."  onChange={phoneChange}/>
                <button onClick={changeData}>Change Data</button>
                <button onClick={resetDate}>Reset Data</button>
            </div>
            <div>
                <p>Name : {state.name}</p>
                <p>Address : {state.address}</p>
                <p>Phone : {state.phone}</p>
            </div>

        </>
    );
}
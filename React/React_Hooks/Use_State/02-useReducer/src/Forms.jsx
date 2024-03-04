import React, { useReducer } from "react";

export const Forms = () => {
    const initState = {
        name: 'tls',
        address: 'palaw',
        phone: '0987654321'
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'change-data':
                return {
                    ...state,
                    [action.field]: action.value
                };

            case 'reset-data':
                return initState;

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initState);

    function handleChange(event) {
        const { name, value } = event.target;
        dispatch({ type: 'change-data', field: name, value });
    }

    function changeData() {
        // You can perform any data manipulation here
        // For now, just logging the form data
        console.log('Form Data:', state);
    }

    function resetData() {
        dispatch({ type: 'reset-data' });
    }

    return (
        <>
            <div>Hello Form Components</div>
            <div>
                <input type="text" name="name" placeholder="Something name ..." value={state.name} onChange={handleChange} />
                <input type="text" name="address" placeholder="Address ..." value={state.address} onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Telephone ..." value={state.phone} onChange={handleChange} />
                <button onClick={changeData}>Change Data</button>
                <button onClick={resetData}>Reset Data</button>
            </div>
            <div>
                <p>Name : {state.name}</p>
                <p>Address : {state.address}</p>
                <p>Phone : {state.phone}</p>
            </div>
        </>
    );
}

import React, {useEffect, useReducer, useState} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT' :
            return {value: state.value - 1};
        case 'MULTIPLY':
            return {value: state.value * action.cost};
        case 'CLEAR':
            return {value: 0};
        default :
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    const [cost, setCost] = useState(1);

    useEffect(()=>{
        console.log("렌더링 되었습니다.")
    },[cost]);

    const onChangeCost = e => {
        setCost(e.target.value);
    };

    return (
        <>
            <div>
                <input value={cost} onChange={onChangeCost}/>
            </div>
            <div>
                <p>
                    현재 카운터 값은 <b>{state.value}</b>
                </p>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
                <button onClick={() => dispatch({type: 'MULTIPLY',cost:cost})}>x{cost}</button>
                <button onClick={() => dispatch({type: 'CLEAR'})}>clear</button>
            </div>
        </>
    )
}

export default Counter;
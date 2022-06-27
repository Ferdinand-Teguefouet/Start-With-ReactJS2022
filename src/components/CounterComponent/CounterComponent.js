import React from 'react';

//Redux
import {useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from 'store/counter.slice';

function CounterComponent() {
    const dispatch = useDispatch();
    return (
        <div style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
        </div>
    );
}

export default CounterComponent;
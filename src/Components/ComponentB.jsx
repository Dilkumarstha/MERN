import React from 'react'
import ComponentC from './componentC.jsx'
import { useSelector } from 'react-redux'
import counterSlice from '../redux/counterSlice.js';

const ComponentB = () => {
    const {count} = useSelector(state => state.counter);
   

   
    return (
        <div>
            {/* <h1>ComponentB(square):{numB * numB}</h1> */}

<h1> componentB (square): {count * count}</h1>
<ComponentC/>
        </div>

    )
}

export default ComponentB
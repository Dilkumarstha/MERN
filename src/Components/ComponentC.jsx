import React from 'react'
import { useSelector } from 'react-redux'
import counterSlice from '../redux/counterSlice.js';
import ComponentD from './ComponentD.jsx';
export const ComponentC = () => {
    const {count} = useSelector(state => state.counter);
   
    
  
    return (

       <div>
       <h1>componentC(cube):    {count *count*count}</h1>
       <ComponentD/>
       </div>
    )
}


export default ComponentC;  
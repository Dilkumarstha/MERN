import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice, { setCube } from '../redux/counterSlice.js';
import ComponentD from './ComponentD.jsx';
export const ComponentC = () => {
    const {count,cube} = useSelector(state => state.counter);
   const dispatch=useDispatch();
useEffect(()=>{
    dispatch(setCube(count*count*count))
},[count])
  
    return (

       <div>
       <h1>componentC(cube):    {count *count*count}</h1>
       <h1>cube: {cube}</h1>
       <ComponentD/>
       </div>
    )
}


export default ComponentC;  
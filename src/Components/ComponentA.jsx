import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import Counter from "../redux/counter";
import ComponentB from "./componentB";

function ComponentA() {
    const dispatch = useDispatch()
    const {count,address,name,cube} = useSelector(state => state.counter);


    function increaseCounter() {
        dispatch(increment())
        console.log("updated")
    }

    function decreaseCounter() {
        dispatch(decrement())
 }

    return (
        <div>
            <h1>componentA </h1>
            <h2>count: {count}</h2>
            <h2>cube: {cube}</h2>
         <ComponentB/>
            <button onClick={increaseCounter}>increment</button>
            <button onClick={decreaseCounter}>decrement</button>
        </div>

    )
}
export default ComponentA;
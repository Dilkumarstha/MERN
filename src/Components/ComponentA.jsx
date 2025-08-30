import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import Counter from "../redux/counter";
import ComponentB from "./componentB";

function componentA() {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.counter);

    function increaseCounter() {
        dispatch(increment())
        console.log("updated")
    }

    function decreaseCounter() {
        dispatch(decrement())
 }

    return (
        <div>
            <h1>componentA :{count}</h1>
         <ComponentB/>
            <button onClick={increaseCounter}>increment</button>
            <button onClick={decreaseCounter}>decrement</button>
        </div>

    )
}
export default componentA;
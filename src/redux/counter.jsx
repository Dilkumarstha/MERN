import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter() {
    const dispatch = useDispatch();
const counterState = useSelector(state=>state.counter)
console.log(counterState)
   
function increaseCounter(){
    console.log('counter updated!')
    dispatch(increment())
}

function decreaseCounter(){
    dispatch(decrement())
}
    return (
<div>

    <button onClick={increaseCounter}> increase counter</button>
    <button onClick={decreaseCounter}> decrease counter</button>

</div>
    )
}

export default Counter;
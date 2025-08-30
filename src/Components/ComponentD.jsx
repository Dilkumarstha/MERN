import { useDispatch } from "react-redux"
import { incrementById } from "../redux/counterSlice";


function ComponentD() {
    const dispatch = useDispatch();
    function increasebyid() {
        dispatch(incrementById(10))
    }
    return (
        <div>
            <button onClick={increasebyid}>increasebyid</button>
        </div>
    )
}

export default ComponentD;
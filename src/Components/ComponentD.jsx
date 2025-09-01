// import { useDispatch } from "react-redux"
// import { incrementById } from "../redux/counterSlice";

import { useDispatch } from "react-redux";
import { incrementById } from "../redux/counterSlice";
import { useState } from "react";


// function ComponentD() {
//     const dispatch = useDispatch();
//     function increasebyid() {
//         dispatch(incrementById(10))
//     }
//     return (
//         <div>
//             <button onClick={increasebyid}>increasebyid</button>
//         </div>
//     )
// }

// export default ComponentD;


function ComponentD() {
    const dispatch = useDispatch();
    const [value, setValue] = useState()
    console.log(value)

    function increasebyid() {
        dispatch(incrementById(parseInt(value)))
    }
    return (
        <div>
            <input type="number" id="" onChange={(e) => setValue(e.target.value)} />
            <button onClick={increasebyid}>AddById</button>
        </div>
    )
}

export default ComponentD;
import { useState } from 'react';
import './App.css'
function Count() {
    // let count = useState(0);
    // let setcount = count[0]
    // let setcountFunction = count[1]

    const [count, setCount] = useState(0)
    return (
        <div className="card">
            <h1>count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Level Up</button>


        </div>
    )

}
export default Count;
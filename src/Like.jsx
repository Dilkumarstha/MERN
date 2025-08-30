import { useState } from "react";
import './App.css'

function Like() {
    const [isLike, setIsLike] = useState(false);

    return (
        <div >
            <h1>this is the like</h1>
            <button onClick={()=>setIsLike(!isLike)}>{isLike ? "🍎" : "🍏"}</button>

       
            
        </div>
    )
}
export default Like;
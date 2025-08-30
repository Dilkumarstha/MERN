// import { useState } from "react";

import { useState } from "react";
import { useEffect } from "react";

// function Card({ title, price, brand, info,like }) {
//     const [isLike, setIsLike] = useState(false)
//     return (
//         <div className="card">
//             <h1>{title}</h1>
//             <h2>{price}</h2>
//             <h2>{brand}</h2>
//             <p>{info}</p>
//             <button>{like}</button>
//             <button onClick={()=>setIsLike(!isLike)}>{isLike?"🍎":"🍏"}</button>





//         </div>
//     )
// }

// export default Card;

import { useRef } from "react";

function Card() {
    const titleRef = useRef(null);
    const inputRef = useRef(null);
    console.log("inputref : " + inputRef)

    console.log(titleRef)
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     if (count >= 2) {
    //         return
    //     }
    //     setCount(count + 1)
    //     test();
    //     console.log(count)

    // }, [count])





    return (


        // <div className="card">


        //     <h1 ref={titleRef}>{count}</h1>
        //     <button onClick={() => setCount(count + 1)}>click</button>
        // </div>

        <div className="card">
            <h3 ref={titleRef}>useRef</h3>
            
            <input type="text" ref={inputRef} />
         <input type="text" />
            <button onClick={()=>inputRef.current.focus()}>focus me </button>
        </div>
    )
}

export default Card;
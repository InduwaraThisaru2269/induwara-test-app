import React, { useState } from "react"

function Counter(){

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    const setCountToZero = () => {
        setCount(0)
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={incrementCount}>Increase</button>
        <button onClick={setCountToZero}>Set To Zero</button>
        <button onClick={decrementCount}>Decrease</button>
        </>
    )
}

export default Counter
import React, {useState} from "react";
export default function Counter(){
    //useState hook = updating variable or STATEFUL VARIABLE
    const [count,setCount] = useState(0)

    //to increment count
    const incrementCount =()=> {
        //previouse state arrow  => new state
        setCount(c => c + 1) //functionally the same with (count => count + 1)
    }

    //to decrement
    const decrementCount =()=> {
        setCount(c => c - 1)
    }

    const resetCount =()=> {
        setCount(c => c = 0)
    }
    return(
        <div className="container">
            <p className="counter-container">
                Counter: <br/> {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick={decrementCount}>Decrement</button>
            <button className="button-container-reset" onClick={resetCount}>Reset</button>
            <button className="button-container-increment" onClick={incrementCount}>Increment</button>
        </div>
    )
}
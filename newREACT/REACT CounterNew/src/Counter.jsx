import React, {useState} from "react";
export default function Counter(){
    //useState hook = updating variable or STATEFUL VARIABLE
    const [count,setCount] = useState(0)

    //to increment count
    const incrementCount =()=> {
        //previouse state arrow  => new state
        setCount(c => c + 1) //functionally the same with (count => count + 1)
    }

    const incrementCount5 =()=> {
        //previouse state arrow  => new state
        setCount(c => c + 5) //functionally the same with (count => count + 1)
    }

    //to decrement
    const decrementCount =()=> {
        setCount(c => c - 1)
    }
    const decrementCount5 =()=> {
        setCount(c => c - 5)
    }

    const resetCount =()=> {
        setCount(c => c = 0)
    }

    const randomCount =()=> {
        setCount(Math.floor((Math.random()*(999 - (-999) +1))+(-999)))
    }

    return(
        <div className="container">
            <p className="counter-container">
                Counter: <br/> {count}
            </p>
            &nbsp;
            <br/>
            <button className="button-container-decrement" onClick={decrementCount}>Decrement</button>
            <button className="button-container-reset" onClick={resetCount}>Reset</button>
            <button className="button-container-increment" onClick={incrementCount}>Increment</button>
            <br/>
            <button className="button-container-decrement5" onClick={decrementCount5}>-5</button>
            <button className="button-container-randomCount" onClick={randomCount}>Random</button>
            <button className="button-container-increment5" onClick={incrementCount5}>+5</button>

        </div>
    )
}
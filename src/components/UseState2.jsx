import { useState } from "react";

const UseState2 = () => {
    let initialValue = 0
    const [count,setCount] = useState(initialValue);
    const increamentFive = ()=>{
        for(let i = 1;i<=10;i++){
            setCount(prevValue=>prevValue+4)
        }
    }
    const decrementTen = () =>{
        for(let i = 1;i<=10;i++){
            setCount(preveValue=>preveValue-1)
        }
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increamentFive} >Increament10</button> <br /> <br />
            <button onClick={()=>{setCount(initialValue)}} >Reset</button> <br /> <br />
            <button onClick={()=>{
                setCount(count+1)
            }} >Increment</button> <br /><br />
            <button onClick={()=>{
                setCount(count-1)
            }} >decrement</button> <br /> <br />
            <button onClick={decrementTen} >decrementTen</button>
        </div>
    );
};

export default UseState2;
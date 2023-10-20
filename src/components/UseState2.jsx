import React, { useState } from 'react';

const UseState2 = () => {
    let initialCount = 0;
    const [count,setCount] = useState(initialCount)
    return (
        <div>
            count : {count} <br /> <br /> <br />
            <button onClick={()=>{
                setCount(initialCount)
            }} >
                reset
            </button>
             <br /> <br />
             <button onClick={()=>{
                setCount(count+1)
             }} >
                increment 
             </button> 
             <br /> <br /> <br />
             <button onClick={()=>{
                setCount(count-1)
             }} >
                decrement 
             </button>
        </div>
    );
};

export default UseState2;
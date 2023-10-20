import { useEffect, useState } from "react";


const UseEffect = () => {
    const [count,setCount] = useState(0);
    const resetBtn = () =>{
        setCount(0)
    }
    useEffect(()=>{
        document.title = `you click ${count} times `
    })
    return (
        <div>
            <button onClick={resetBtn} >Reset Value</button>
            <button onClick={()=>{
                setCount(count+1)
            }} >ADD</button>
            count : {count}
        </div>
    );
};

export default UseEffect;
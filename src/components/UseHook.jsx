import { useState } from "react";

const UseHook = () => {
    const [count,setCount] = useState(0)
    return (
        <div className="btn" >
            <button onClick={()=>{
                setCount(count+1)
            }} >count{count}</button>
        </div>
    );
};

export default UseHook;
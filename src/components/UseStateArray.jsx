import { useState } from "react";

const UseStateArray = () => {
    const [data,setData] = useState([]);
    const getData = () =>{
        setData([
            ...data,{
                id : data.length,
                value : Math.floor(Math.random()*100) +1,
            }
        ])
    }
    const resetBtn = () =>{
        setData([])
    }
    return (
        <div>
            <button onClick={getData} >Add Item</button> <br /> <br />
            <button onClick={resetBtn} >Reset Value</button> <br /><br />
            <ul>
                {
                    data.map(item=>(
                        <li key={item.id} >{item.value}</li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default UseStateArray;
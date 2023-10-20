import { useState } from "react";
const UseHookObject = () => {
    const [name,setName] = useState({firstName:"",lastName:""});
    const getFirstName = (e) =>{
        setName({
            ...name,firstName:e.target.value
        })
    }
    const getLastName = (e) =>{
        setName({
            ...name,lastName:e.target.value
        })
    }
    return (
        <div>
            <form action="">
                <input type="text" onChange={getFirstName} value={name.firstName}
                 placeholder="Enter your first name" /> <br /> <br />
                 <input type="text" placeholder="Enter your last name"
                 onChange={getLastName} value={name.lastName} /> <br /><br />
                 <h1>Your first name is : {name.firstName} </h1>
                 <h1>Your last name is : {name.lastName}</h1>
                 <p>{JSON.stringify(name)}</p>
            </form>
        </div>
    );
};

export default UseHookObject;
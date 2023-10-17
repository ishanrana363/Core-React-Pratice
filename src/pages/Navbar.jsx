const Navbar = () => {
    let demo = () =>{
        alert("Hello Ishan Rana")
    }
    return (
        <div>
            {/* Arrow Function **/}
            {/* <button onClick={()=>{alert("Hello Ishan")}} >Submit</button> */}
            {/* Onclick */}
            {/* <button onClick={(alert("hello programmer"))} >Submit</button> */}
            {/* Normal Function */}
            {/* <button onClick={
                function(){
                    alert("Hello Ishan")
                }
            } >Submit</button> */}
            <button onClick={demo} >Submit</button>

        </div>
    );
};

export default Navbar;
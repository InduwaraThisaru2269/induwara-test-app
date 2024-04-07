
function Button(){


    const handleClick =  () => window.alert("Ouch!!!!")

    const handleClick2 = (Name) => window.alert(Name + ' stop clicking me!!!');
  
    return(
        <button onClick={() => handleClick2("Induwara")}>Click Me!</button>
    )
}

export default Button
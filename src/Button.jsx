
function Button(){
    let count = 0;

    /*const handleClick =  (name) => {
        if(count < 3){
            count++;
            window.alert(name + ', you clicked me '+count+' times');
        }
        else{
            window.alert(name+' stop clicking me!')
        }
    }*/

    //const handleClick2 = (Name) => window.alert(Name + ' stop clicking me!!!');
    
    const handleClick = (e) => e.target.textContent = "OUCH!";
    return(
        <button onClick={(e) => handleClick(e)}>Click Me!</button>
    )
}

export default Button
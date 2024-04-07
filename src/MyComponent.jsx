import React, {useState} from "react"

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployeed, setIsEmployeed] = useState(false)

    const updateName = () => {
        setName("Induwara");
    }

    const incremetAge = () => {
        setAge(age + 1)
    }

    const changeEmployeeStatus = () => {        
        setIsEmployeed(!isEmployeed)    
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incremetAge}>Increment Age</button>

            <p>Is employeed: {isEmployeed ? "Yes" : "No"}</p>
            <button onClick={changeEmployeeStatus}>Change Employeement</button>
        </div>
    );
}

export default MyComponent
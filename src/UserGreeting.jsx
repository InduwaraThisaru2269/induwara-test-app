import props from 'prop-types'

function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please Log in to Continue</h2>

    }
}

export default UserGreeting
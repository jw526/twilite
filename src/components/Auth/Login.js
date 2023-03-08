import {useAuth} from './AuthProvider'
import {useRef} from 'react'
import {Navigate} from 'react-router-dom'


function Login()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptLogin(e)
    {
        e.preventDefault();
        authContext.signin(userRef.current.value,pwdRef.current.value) 
    }

    return(
        //if logged in, go to admin. Otherwise login
        authContext.currentUser? <Navigate to="/admin"/>:
        <div className="login-form">
            <h3>Login</h3>
            <form id='login-form'>
                <label>Email:</label>
                <input type="text" ref={userRef}></input><br/>
                <label>Password:</label>
                <input type="password" ref={pwdRef}></input><br/>
                <button type='submit' onClick={onAttemptLogin}>Login</button>
            </form>
            
        </div>
    )
}


export default Login
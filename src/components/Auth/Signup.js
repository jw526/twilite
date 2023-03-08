import {useAuth} from './AuthProvider'
import {useRef} from 'react'

function Signup()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptSignup(e)
    {
        e.preventDefault();
        authContext.signup(userRef.current.value,pwdRef.current.value)
    }

    return(
        <div className="login-form">
            <h3>Sign Up</h3>
            <form>
                <label>Email:</label>
                <input type="text" ref={userRef}></input><br/>
                <label>Password:</label>
                <input type="password" ref={pwdRef}></input><br/>
                <button type='submit' onClick={onAttemptSignup}>Sign Up</button>
            </form>
        </div>
    )
}


export default Signup
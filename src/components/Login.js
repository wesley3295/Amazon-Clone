import React,{useState} from 'react'
import '../CSS/Login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from '../firebase'
const Login = () => {
    const history = useHistory()
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
const changeEmail = (e) => {
setEmail(e.target.value)
}
const changePassword= (e) => {
    setPassword(e.target.value)
}
const signIn = (e) => {
e.preventDefault()
auth.signInWithEmailAndPassword(email,password)
.then((auth)=>{
    console.log(auth)
    if(auth){
        history.push('/')
    }
}).catch(error=>alert(error.message))
}
const register = (e) => {
e.preventDefault()
auth.createUserWithEmailAndPassword(email, password)
.then((auth)=>{
    console.log(auth)
    if(auth){
        history.push('/')
    }
}).catch(error=>alert(error.message))
}
    return (
        <div className="login">
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""
            className="login__logo"
            />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" value={email} onChange={e=>changeEmail(e)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>changePassword(e)}/>
                    <button type="submit" className='login__signInButton' onClick={signIn}>Sign-In</button>
                </form>
                <p>By signing-in you agree to The Clone of FAKE Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest Based Ads Notice.</p>
            <button type="submit" className='login__registerButton' onClick={register}>Create Account</button>
            </div>
        </div>
    )
}

export default Login

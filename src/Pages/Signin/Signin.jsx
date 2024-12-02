import React from 'react'
import "../Signin/Signin.css"
import { Link } from 'react-router-dom'
function Login(){
  return (
    <div className='signin-con'>
      <h2>Login</h2> 
      <form action="">
        <label>Emile</label>
        <input placeholder='Emile' type="text"/>
        <label>Password</label>
        <input placeholder='Password' type="password"/>
        <button type='submit'>Login</button>
        <div className='page'>
          <p>Don't have an account?</p>
          <Link to='/signup'>Sign up</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
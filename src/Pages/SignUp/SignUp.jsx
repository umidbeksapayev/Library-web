import React from 'react'
import "../SignUp/SignUp.css"
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className='signup-con'>
      <h2>Sign Up</h2> 
      <form action="">
        <label>Username</label>
        <input placeholder='username' type="text"/>
        <label>Email</label>
        <input placeholder='Email' type="text"/>
        <label>Password</label>
        <input placeholder='Password' type="password"/>
        <label>Confirm Password</label>
        <input placeholder='Confirm Password' type="password" />
        <button  type='submit'>Sign Up</button>
        <div className='page'>
          <p>Already have an account?</p>
          <Link  to='/signin'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
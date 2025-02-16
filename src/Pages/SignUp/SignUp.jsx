import React,{useState} from 'react'
import "../SignUp/SignUp.css"
import { Link } from 'react-router-dom'
function SignUp() {
  const [userData, setUserData] = useState({
    username:'',
    password:'',
    email:'',
    phone:'',

  })
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:8080/signup',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(userData),
      })
      if(!response.ok){
        throw new Error("Malumotlarni yuborishda xatolik!")
      }
      const data = await response.json()
      console.log("Yuborilgan foydalanuvchi:", data)
      alert("Malumot jo'natildi")
    }catch(error){
      console.log("xatolik:",error)
      alert("Xatolik yuz berdi")
    }
  }
  return (
    <div className='signup-con'>
      <h2>Sign Up</h2> 
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input placeholder='username' type="text" value={userData.username} onChange={(e)=>setUserData({...userData, username:e.target.value})}/>
        <label>Phone number</label>
        <input placeholder='phone number' type="text" value={userData.phone} onChange={(e)=>setUserData({...userData, phone:e.target.value})}/>
        <label>Email</label>
        <input placeholder='Email' type="text" value={userData.email} onChange={(e)=>setUserData({...userData, email: e.target.value})}/>
        <label>Password</label>
        <input placeholder='Password' type="text" value={userData.password} onChange={(e)=>setUserData({...userData, password:e.target.value})}/>
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
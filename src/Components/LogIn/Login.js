import React, { useState } from 'react'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function LogIn() {

  const [myName, setName] = useState("")
  const [myEmail, setEmail] = useState("")
  const [myPassword, setPassword] = useState("")
  const navigate = useNavigate()

  function submitLogInData(e) {
    e.preventDefault()

    const loggedUser = JSON.parse(localStorage.getItem("user"))

    const user = loggedUser.find((item)=> item.email == myEmail && item.password == myPassword && item.name == myName)
    
        if(user){
            localStorage.setItem("loggedIn", true)
            navigate('/')
        }else{
            alert("Enter correct password")
        }
  }

  return (
    <div>

      <form className={styles.form} onSubmit={submitLogInData}>
        <h1>Log-In</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className={styles.name}
          onChange={(e) => setName(e.target.value)}
          value={myName}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className={styles.name}
          onChange={(e) => setEmail(e.target.value)}
          value={myEmail}

        />

        <input
          type="password"
          placeholder="Enter Your Password"
          className={styles.name}
          onChange={(e) => setPassword(e.target.value)}
          value={myPassword}
        />
        <p>If you are new to Tiffome, click to <span><Link to={'/signIn'}>SignIn</Link></span> </p>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

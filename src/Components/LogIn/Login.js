import React, { useState } from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

export default function LogIn() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function submitLogInData(e) {
    e.preventDefault()

    let nameRegex = /^[a-zA-Z- ]+$/g;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/g;

    if (!nameRegex.test(name)) {
      alert("Enter Valid Name")
    } else if (!emailRegex.test(email)) {
      alert("Enter Valid Email")
    } else if (!passwordRegex.test(password)) {
      alert("Enter Valid Password")
    }
    if (name && email && password) {
      let data = {
        name: name,
        email: email,
        password: password
      }
      console.log(data)
      alert("Thanks for Registering")
      setEmail("")
      setName("")
      setPassword("")
    }
  }
  
  return (
    <div>
      <form className={styles.form}>
        <h1>Log-In</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className={styles.name}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className={styles.name}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className={styles.name}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p>If you are new to Tiffome, click to <span><Link to={'/signIn'}>SignIn</Link></span> </p>
        <button className={styles.btn} onClick={submitLogInData}>Submit</button>
      </form>
    </div>
  )
}

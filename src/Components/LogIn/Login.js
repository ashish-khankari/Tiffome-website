import React, { useState } from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';

export default function LogIn() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [error, alert] = useState("")
  // const [success, setSuccess] = useState("")
  function submitLogInData(e) {
    e.preventDefault()

    let nameRegex = /^[a-zA-Z- ]+$/g;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/g;

    let nameCheck = nameRegex.test(name)
    let emailCheck = emailRegex.test(email)
    let passwordCheck = passwordRegex.test(password)
    if (!nameCheck) {
      alert("Enter Valid Name")
    } else if (!emailCheck) {
      alert("Enter Valid Email")
    } else if (!passwordCheck) {
      alert("Enter Valid Password")
    }
    if (nameCheck && emailCheck && passwordCheck) {
      let data = {
        name: name,
        email: email,
        password: password
      }
      alert("You are succesfully logged in")
      setEmail("")
      setName("")
      setPassword("")
      
      console.log(data)

    }
  }

  return (
    <div>

      <form className={styles.form}>
        <h1>Log-In</h1>
        {/* {error && (
          <Alert severity="error">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}

        {success && (
          <Alert severity="success">
            <AlertTitle>{success}</AlertTitle>
          </Alert>
        )} */}
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

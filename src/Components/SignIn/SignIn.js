import React, { useState } from 'react'
import styles from './SignIn.module.css'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'
export default function SignIn() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  function myName(e) {
    setName(e.target.value)
    // setName("")

  }
  function myEmail(e) {
    setEmail(e.target.value)

  }
  function myPassword(e) {
    setPassword(e.target.value)

  }
  function MyConfirmPassword(e) {
    setConfirmPassword(e.target.value)

  }

  function handleSubmit(e) {
    e.preventDefault()
    submitData()

  }

  function submitData() {

    let nameRegex = /^[a-zA-Z- ]+$/g;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/g;


    if (password !== confirmPassword) {
      alert("check your password")
    }
    if (!nameRegex.test(name)) {
      alert("Enter Valid Name")
    } else
      if (!emailRegex.test(email)) {
        alert("Enter Valid Email")
      } else
        if (!passwordRegex.test(password)) {
          alert("Enter Valid Password")
        } else if (password.length !== confirmPassword.length) {
          alert("Enter correct password")
        } else {

          alert("ThankYou for Registration")
          const data = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
          };
          console.log(data);
          setName("")
          setEmail("")
          setPassword("")
          setConfirmPassword("")
        }

  }
  return (

    <>
    <Navbar/>
      <form onSubmit={submitData} className={styles.form}>
        <h1>Sign-In Here</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={myName}
          value={name}
          className={styles.name}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={myEmail}
          value={email}
          className={styles.name}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={myPassword}
          value={password}
          className={styles.name}

        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          onChange={MyConfirmPassword}
          value={confirmPassword}
          className={styles.name}

        />
        <p>If you are already a member, click to <span><Link to={'/logIn'} >LogIn</Link></span> </p>
        <button onClick={handleSubmit} className={styles.btn}>Submit</button>
      </form>
      <Footer/>
    </>
  )
}

import React, { useState } from 'react'
import styles from './SignIn.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function SignIn() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [list, setList] = useState([])

  const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault()
    let nameRegex = /^[a-zA-Z- ]+$/g;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/g;

    if (!nameRegex.test(name)) {
      alert("Enter Valid Name")
    } else
      if (!emailRegex.test(email)) {
        alert("Enter Valid Email")
      } else
        if (!passwordRegex.test(password)) {
          alert("Enter Valid Password")
        } else if (password.length === confirmPassword.length || password === confirmPassword) {
          alert("ThankYou for Registration")
          const data = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
          };
          // console.log(data);
          setName("")
          setEmail("")
          setPassword("")
          setConfirmPassword("")

          setList((prevList)=>[...prevList, data])
          localStorage.setItem("user", JSON.stringify([...list, data]))
          navigate('/logIn')

        } else {
          alert("Check Your Password")
        }


  }

  return (

    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Sign-Up</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={styles.name}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={styles.name}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={styles.name}

        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          className={styles.name}

        />
        <p>If you are already a member, click to <span><Link to={'/logIn'} >LogIn</Link></span> </p>
        <button className={styles.btn}>Submit</button>
      </form>
    </>
  )
}

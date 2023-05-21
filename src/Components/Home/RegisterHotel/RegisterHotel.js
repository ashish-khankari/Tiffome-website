import React,{useState} from 'react'
import styles from './RegisterHotel.module.css'
import { useNavigate } from 'react-router-dom'
export default function RegisterHotel() {

  const navigate = useNavigate()

  function handleRegisterForm(){

    const loggedIn = localStorage.getItem("loggedIn")

    if(loggedIn){
      navigate('/registerHotelForm')
    }else{
      alert("You need to login")
    }
  }
  return (
    <div className={styles.hotelRegistration}>
      <h2 className={styles.text1}>Grow your restaurant business</h2>
        <h1 className={styles.text}>Add your restaurant now! It's FREE!</h1>

        <button className={styles.register} onClick={handleRegisterForm}>Get Started</button>
    </div>
  )
}

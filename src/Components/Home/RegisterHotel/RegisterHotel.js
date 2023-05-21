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
        <h1 className={styles.text}>Register Your Services</h1>

        <button className={styles.register} onClick={handleRegisterForm}>Registration Form</button>
    </div>
  )
}

import React from 'react'
import styles from './RegisterHotel.module.css'
import { Link } from 'react-router-dom'
export default function RegisterHotel() {
  return (
    <div className={styles.hotelRegistration}>
        <h1 className={styles.text}>Register Your Services</h1>

        <button className={styles.register}><Link to={'/registerHotelForm'}>Registration Form</Link></button>
    </div>
  )
}

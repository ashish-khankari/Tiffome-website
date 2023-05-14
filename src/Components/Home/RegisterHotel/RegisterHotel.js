import React from 'react'
import styles from './RegisterHotel.module.css'
export default function RegisterHotel() {
  return (
    <div className={styles.hotelRegistration}>
        <h1 className={styles.text}>Register Your Services</h1>

        <button className={styles.register}>Click To Register</button>
    </div>
  )
}

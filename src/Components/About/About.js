import React from 'react'
import styles from './about.module.css'
export default function About() {
  return (
    <div>
    
      <div className={styles.aboutSection}>
        <h1>Welcome to Tiffome</h1>
        <div className={styles.text}>
        <h2>Your SEARCH for Tiffin ends here!</h2>
        <p>In today’s fast working environment it’s very hard to find the good <span style={{color:"red"}}>Tiffome</span> ( Tiffin At Home ) especially for the ones who are living away from their hometown… </p>
  
        <p>Basically, <span style={{color:"red"}}>Tiffome</span>  is the perfect solution for everyone who’s looking for Dabba / Tiffin service...</p>
        <p>So, why hassle anywhere go through our dedicated listing of ‘Tiffin Mess Service Providers’ in your nearby locality…</p>
        </div>
       
      </div>

      <div className={styles.ourStory}>
        <h1>Our Story</h1>
        <p>"Our Aim is to bring all Tiffin Mess Service Providers & Empowering the individual, especially Women Gruh Udhyog by listing them online & creating an ultimate Tiffin Meal Experience to end users!"</p>

      </div>
      <div className={styles.footer}>
      </div>
    </div>
  )
}

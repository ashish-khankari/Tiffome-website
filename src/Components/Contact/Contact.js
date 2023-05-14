import React, { useState } from 'react'
import styles from './contact.module.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import Navbar from '../Home/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'
export default function Contact() {

  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactMobile, setContactMobile] = useState("")
  const [contactHotelName, setContactHotelName] = useState("")
  const [contactMessage, setContactMessage] = useState("")

  function submitContactDetails() {
    if((contactName && contactEmail && contactHotelName && contactMobile && contactMessage) !== ""){
      let contactValue = {
        name: contactName,
        email: contactEmail,
        hotelName: contactHotelName,
        mobileNumber: contactMobile,
        message: contactMessage
      }
  
      console.log(contactValue)
    }else{
      alert("Please Fill all the Details as it is important for us to connect with you")
    }
    
  }

  function resetForm() {
    setContactName("")
    setContactEmail("")
    setContactHotelName("")
    setContactMessage("")
    setContactMobile("")
  }
  return (
    
    <>
    <Navbar/>
    <div className={styles.contain}>
      
      <div className={styles.wrapper}>

        <div className={styles.form}>
          <h4>GET IN TOUCH</h4>
          <h2 className="styles.form-headline">Send us a message</h2>
          <form className={styles.submitForm}>
            <p>
              <input className={styles.formInput} type="text" placeholder="Your Name" onChange={(e) => setContactName(e.target.value)} value={contactName} />
              <small className="styles.name-error"></small>
            </p>
            <p>
              <input id="email" className={styles.formInput} type="email" placeholder="Your Email" onChange={(e) => setContactEmail(e.target.value)} value={contactEmail} />
              <small className="name-error"></small>
            </p>
            <p className={styles.fullWidth}>
              <input id="mobile-number" className={styles.formInput} type="number" placeholder="Mobile Number" onChange={(e) => setContactMobile(e.target.value)} value={contactMobile} />
              <small></small>
            </p>
            <p className={styles.fullWidth}>
              <input id="company-name" className={styles.formInput} type="text" placeholder="Restaurant Name"  onChange={(e) => setContactHotelName(e.target.value)} value={contactHotelName} />
              <small></small>
            </p>
            <p className={styles.fullWidth}>
              <textarea id="message" cols="30" rows="7" placeholder="Your Message"  onChange={(e) => setContactMessage(e.target.value)} value={contactMessage}></textarea>
              <small></small>
            </p>
            <p className={styles.fullWidth}>
              <input type="checkbox" id="checkbox" name="checkbox" /> Yes, I would like to receive communications by call / email about Company's services.
            </p>
            <p className={styles.fullWidth}>
              <button className={styles.submitBtn} onClick={submitContactDetails}>Submit</button>
              <button className={styles.resetBtn} onClick={resetForm}>Reset</button>
            </p>
          </form>
        </div>

        <div className={styles.contactWrapper}>

          <ul>
            <li className={styles.contactText}>We've Succesfully delivered more than <span style={{ color: "red" }}>1000 orders</span> for our clients. Ready to know
              how we can help you?</li>
            <span className="hightlight-contact-info">
              <li className={styles.emailInfo}><FaEnvelope />: ashishkhankari0922@gmail.com</li>
              <li className={styles.callInfo}><FaPhoneAlt />: 7387285044</li>
            </span>
          </ul>
        </div>
      </div>
    </div>

    <div className={styles.footer}>
    <Footer/>

    </div>
    </>
  )
}

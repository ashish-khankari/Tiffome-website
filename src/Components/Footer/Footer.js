import React from 'react'
import "./Footer.css"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='grid-1'>
        <h1>
          Tiffome
        </h1>
        <div className='nav-list'>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Services</p>
          <p>Support</p>
        </div>

        <h2 className='start-date'>Tiffome @2018</h2>
      </div>

      <div className='grid-2'>
        <p><FaMapMarkerAlt />: Nashik</p>
        <p><FaPhoneAlt />: 7387285044</p>
        <p><FaEnvelope />: ashishkhankari0922@gmail.com</p>
      </div>

      <div className='grid-3'>
        <h4>About the Company</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className='footer-icons'>
          <FaFacebookSquare className='social-media-icons' />
          <FaTwitterSquare className='social-media-icons' />
          <FaLinkedin className='social-media-icons' />
          <FaGithubSquare className='social-media-icons' />
        </div>
      </div>
    </div>
  )
}

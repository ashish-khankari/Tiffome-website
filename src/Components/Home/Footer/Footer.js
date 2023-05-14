import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='grid-1'>
        <h1>
          Tiffome
        </h1>
        <div className='nav-list'>
          <p><Link to={'/'} >Home</Link></p>
          <p><Link to={'/contact'} >Contact</Link></p>
          <p><Link to={'/about'} >About</Link></p>

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
          <a href="https://github.com/ashish-khankari" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className='social-media-icons' />
          </a>
          <a href="https://github.com/ashish-khankari" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className='social-media-icons' />
          </a>
          <a href="https://github.com/ashish-khankari" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare className='social-media-icons' />
          </a>
          <a href="https://www.linkedin.com/in/ashish-khankari/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='social-media-icons' />
          </a>


        </div>
      </div>
    </div>
  )
}

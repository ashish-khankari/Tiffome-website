import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1 className='subscribe-text'>Subscribe to Our NewsLetter</h1>
            <div className='update-text'>
                <p>Want to keep up to date with all our latest news and information?</p>
                <p>Enter your email below to be added to our mailing list.</p>
            </div>

            <input placeholder='Enter Your Email' className='enter-email' />
            <button className='sign-up'>Sign Up</button>
        </div>
    )
}

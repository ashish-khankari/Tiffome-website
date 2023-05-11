import React from 'react'
import './MobileVersion.css'
export default function MobileVersion() {
    return (
        <div className='mobile-version'>
            <div>
                <img src='/Assets/hand-holding-image.jpg' className='image' />
            </div>
            <div className='text-area'>
                <h1>Find the best Tiffins in Your Area</h1>
                <img src='/Assets/app-store.jpg' className='app-store' />
                <img src='/Assets/google-store.jpg' className='google-store'/>
            </div>
        </div>
    )
}

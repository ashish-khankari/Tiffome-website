import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div>
          <section className="main">
            <h3>
                Order food to your door
            </h3>

            <div className="input">
                <input type="text" className="address" placeholder="Enter delivery address"/>
                <select name="address" className="drop-down">
                    <option value="deliver">Deliver now</option>
                    <option value="schedule">Shedule for later</option>
                </select>

                <button className="find-food">
                    Find Food
                </button>
            </div>

            <small id="small-text">
                <a href="#">Sign In</a>

                <span>for your recent addresses</span>
            </small>
        </section>
    </div>
  )
}

export default HeroSection
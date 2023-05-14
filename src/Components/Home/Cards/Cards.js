import React from 'react'
import './Cards.css'
const Cards = () => {
    return (
        <div className="img-cards">
            <div className='cards'>
                <div>
                    <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/dd109bb1f7572eed.png" alt="" className="img" />

                    <div className="text">
                        Feed your employees
                    </div>

                    <div className="link">
                        <a href="#">Create a business account </a>
                    </div>
                </div>

                <div>
                    <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8148ef38ec4096b7.png" alt="" className="img" />

                    <div className="text">
                        Your restaurant, delivered
                    </div>

                    <div className="link">
                        <a href="#">Add Your Restaurant</a>
                    </div>
                </div>

                <div>
                    <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7a9d4feba62d2c0b.png" alt="" className="img" />

                    <div className="text">
                        Deliver with Uber eats
                    </div>

                    <div className="link">
                        <a href="#">Sign-up to deliver </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
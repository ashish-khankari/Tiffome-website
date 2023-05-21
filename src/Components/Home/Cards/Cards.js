import React from 'react'
import './Cards.css'
import { Link,useNavigate } from 'react-router-dom'

const Cards = () => {

    const navigate = useNavigate()


    function handleEntryForm(){
        const loggedUser = localStorage.getItem("loggedIn")

        if(loggedUser){
            navigate('registerHotelForm')
        }else{
            alert("Please Log In")
        }
    }
    return (
        <>
        <p>Scroll Next --</p>
        <div className="img-cards">
           
            <div className='cards'>
                <div>
                    <img src="https://media.istockphoto.com/id/1256242773/photo/indian-veg-lunchbox-for-office-of-workplace-with-chole-dal-fry-rice-and-chapati.jpg?s=612x612&w=0&k=20&c=0dTlCuX0nk881vhl4BjEwm1KkqJW2ZewaC8-uxm32tg=" alt="" className="img" />

                    <div className="text">
                        Order Single Tiffin
                    </div>

                    <div className="link">
                        <Link to={'/signIn'}>Create Account to order</Link>
                    </div>
                </div>

                <div>
                    <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8148ef38ec4096b7.png" alt="" className="img" />

                    <div className="text">
                        List Your Mess Services
                    </div>

                    <div className="link" onClick={handleEntryForm}>
                        <Link>Register Your Services</Link>
                    </div>
                </div>

                <div>
                    <img src="https://media.istockphoto.com/id/1287632111/photo/weve-got-you-covered-during-lockdown.jpg?s=612x612&w=0&k=20&c=7tP1pfzLUEWHnDv-Sb8Gc_4NepfpUV5aG_Z4P_3DJ80=" alt="" className="img" />

                    <div className="text">
                        Deliver with Us
                    </div>

                    <div className="link">
                        <a href="#">Sign-up to deliver </a>
                    </div>
                </div>

                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ndlOtW331t0qHbdDTgSXZuQmJez40h5GsB2N6Nzwrw&usqp=CAU&ec=48665701" alt="" className="img" />

                    <div className="text">
                        Click to avail Amazing Offers
                    </div>

                    <div className="link">
                        <a href="#">Get a Premium Membership </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards
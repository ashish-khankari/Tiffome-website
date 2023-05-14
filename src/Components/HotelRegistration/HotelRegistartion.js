import React, { useState } from 'react'
import './HotelRegistartion.css'
const HotelRegistartion = () => {

    // maintaining state for each input field
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [rate, setRate] = useState('')
    const [fullName, setFullName] = useState('')

    // const [mydata, setData] = useState("")

    function submitData() {


        let data = {
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            city: city,
            rate: rate,
            fullName: fullName
        }


        if (name && email && mobile && city && address && city && rate && fullName) {
            console.log(data)
            setName("")
            setAddress("")
            setEmail("")
            setMobile("")
            setCity("")
            setRate("")
            setFullName()

            alert("ThankYou for Registering")
        } else {
            alert("Please fill all the Required Data")
        }


    }

    return (

        <div className='registration-form'>
            <h1>Register Your Restaurant</h1>
            <form>

                <input
                    placeholder='Add Your Name'
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='input-field'
                />
                <input
                    placeholder='Add Your Email'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='input-field'

                />
                <input
                    placeholder='Add Your Mobile'
                    type='number'
                    onChange={(e) => setMobile(e.target.value)}
                    value={mobile}
                    className='input-field'

                />
                <input
                    placeholder='Add Your Address'
                    type='text'
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className='input-field'

                />
                <input
                    placeholder='Add Your City'
                    type='text'
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    className='input-field'
                />

                <input
                    placeholder='Add Your Tiffin Rate'
                    type='text'
                    onChange={(e) => setRate(e.target.value)}
                    value={rate}
                    className='input-field'
                />

                <input
                    placeholder='Enter Full Name'
                    type='text'
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    className='input-field'
                />


            </form>

            <button onClick={submitData} className='submit-btn'>Submit</button>
        </div>

    )
}

export default HotelRegistartion
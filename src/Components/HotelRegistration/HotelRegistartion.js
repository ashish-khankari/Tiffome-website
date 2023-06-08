import React, { useState } from 'react'
import styles from './HotelRegistrationForm.module.css'
import { firestore } from '../../config/firebase'

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

    function submitHotelData(e){
        e.preventDefault()
        submitData()
        firestore.collection("user_data")
        .add({
            name, email, mobile, address, city, rate, fullName
        })
    }

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
            setFullName("")

            alert("ThankYou for Registering")
        } else {
            alert("Please fill all the Required Data")
        }


    }

    return (
        <>
        
        <div className={styles.registrationForm}>
            <h1>Register Your Restaurant</h1>
            <form className={styles.hotelRegistrationForm} onSubmit={submitHotelData}>
                <div className={styles.registrationForm}>

                    <input
                        placeholder='Add Your Name'
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={styles.inputField}
                    />
                    <input
                        placeholder='Add Your Email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className={styles.inputField}

                    />
                    <input
                        placeholder='Add Your Mobile'
                        type='number'
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                        className={styles.inputField}

                    />
                    <input
                        placeholder='Add Your Address'
                        type='text'
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        className={styles.inputField}

                    />
                    <input
                        placeholder='Add Your City'
                        type='text'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        className={styles.inputField}
                    />

                    <input
                        placeholder='Add Your Tiffin Rate'
                        type='text'
                        onChange={(e) => setRate(e.target.value)}
                        value={rate}
                        className={styles.inputField}
                    />

                    <input
                        placeholder='Enter Full Name'
                        type='text'
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                        className={styles.inputField}
                    />

                    <button className={styles.submitBtn}>Submit</button>
                </div>
            </form>
            
        </div>
      
        </>
    )
}

export default HotelRegistartion
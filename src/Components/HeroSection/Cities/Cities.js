import React from 'react'
import { CityData } from './CitiesData'
import './Cities.css'
export const Cities = () => {
    return (
        <div className='cities-near-me'>
            <h1>Cities near me</h1>
            <div className='cities'>
                {
                    CityData.map((item) => (
                        <ul>
                            <li className='cities-list'>{item}</li>
                        </ul>
                    ))
                }
            </div>

        </div>
    )
}

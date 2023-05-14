import React,{useState} from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'

const HeroSection = () => {

    const [searchData, setSearchData] = useState("")
    function findFood(){
        if(searchData!=""){
            let data = {
                searchData: searchData
            }
            setSearchData("")
            console.log(data)
        }else{
            alert("Please Enter a value")
        }
        
    }
  return (
    <div>
          <section className="main">
            <h3>
                Order food to your door
            </h3>

            <div className="input">
                <input 
                type="text" 
                className="address" 
                placeholder="Enter delivery address"  
                onChange={(e)=>setSearchData(e.target.value)} 
                value={searchData}
                />
                <select name="address" className="drop-down">
                    <option value="deliver">Deliver now</option>
                    <option value="schedule">Shedule for later</option>
                </select>

                <button className="find-food" onClick={findFood}>
                    Find Food
                </button>
            </div>

            <small id="small-text">
                <Link to={'/signIn'}>Sign-In</Link>

                <span>for your recent addresses</span>
            </small>
        </section>
    </div>
  )
}

export default HeroSection
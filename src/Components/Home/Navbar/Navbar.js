import React, {useState} from 'react'
import './Navbar.css'
import { FaBars} from "react-icons/fa";
import { Link } from 'react-router-dom';
import ShowButtons from './ShowButtons';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate()

    const authorizedUser = localStorage.getItem('loggedIn')
  
    function showHamburgerMenu(){
            setShowMenu(!showMenu)
    }

    function handleLogOut(){
      localStorage.removeItem('loggedIn')
      navigate('/logIn')
    }
    return (
        
        <div className='navbar'>

          <h2 className='logo'>Tiffome</h2>
           
            <div className='hamburger-menu'>

                <ul className={`header-list ${showMenu ? "show" : ""}`}>
                    <li><Link to={'/'} >Home</Link></li>
                    <li><Link to={'/contact'} >Contact</Link></li>
                    <li> <Link to={'/about'} >About</Link> </li>
                    { authorizedUser ? <button onClick={handleLogOut} className='logout'>LogOut</button> : <ShowButtons/> }
                 
                </ul>
            </div>

            <FaBars className='bar-icon' onClick={showHamburgerMenu} />
            
        </div> 
    )
}

























// import React, { useState } from 'react';
// import './Navbar.css';
// import { FaBars, FaUser } from "react-icons/fa";

// const Navbar = () => {
//   const [showList, setShowList] = useState(false)

//   function showHamList() {
//     setShowList(!showList)
//   }
//   return (
//     <div className='navbar'>
//       <h2 className='logo'>Tiffome</h2>
//       <div className={`header-navbar ${showList ? "show" : "" }`}>
//         <ul className='navbar-list'>
//           <li>Home</li>
//           <li>Contact</li>
//           <li>Services</li>
//           <li>Review</li>
          
//           </ul>
//           <ul className="buttons">
//             <li>
//               <button className="log-in">
//                 <FaUser className="user-icon" />
//                 <a href="./restaurant.html">Log In</a>
//               </button>
//             </li>
//             <li>
//               <button className="sign-in">
//                 <a href="#">Signup</a>
//               </button>
//             </li>
//         </ul>

//       </div>
//       <FaBars className='bar-icon' onClick={showHamList} />
//     </div>
//   );
// };

// export default Navbar;
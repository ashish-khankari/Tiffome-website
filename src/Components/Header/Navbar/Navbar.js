import React, {useState} from 'react'
import './Navbar.css'
import { FaBars, FaUser } from "react-icons/fa";
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    function showHamburgerMenu(){
            setShowMenu(!showMenu)
    }
    return (
        
        <div className='navbar'>

          <h2 className='logo'>Tiffome</h2>
           
            <div className='hamburger-menu'>

                <ul className={`header-list ${showMenu ? "show" : ""}`}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Services</li>
                    <li>Support</li>
                    
                  <ul className="buttons">
                    <li>
                      <button className="log-in">
                         <FaUser className="user-icon" />
                      <a href="./restaurant.html">Log In</a>
                      </button>
                   </li>
                   <li>
                      <button className="sign-in">
                      <a href="#">Signup</a>
                     </button>
                   </li>
                  </ul>
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
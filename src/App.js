import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/LogIn/Login';
import SignIn from './Components/SignIn/SignIn';
import HotelRegistartion from './Components/HotelRegistration/HotelRegistartion';

function App() {
  return (

   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/logIn' element={<Login />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/registerHotelForm' element={<HotelRegistartion/>} />
     
    </Routes>

  );
}

export default App;

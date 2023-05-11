import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar/Navbar';
import Cards from './Components/HeroSection/Cards/Cards';
import { Cities } from './Components/HeroSection/Cities/Cities';
import HeroSection from './Components/HeroSection/Main/HeroSection';
import MobileVersion from './Components/HeroSection/MobileVersion/MobileVersion';
// import HotelRegistartion from './Components/Registration/HotelRegistartion';
function App() {
  return (
    <div className="App">
      {/* <HotelRegistartion/> */}
      <Navbar/>
      <HeroSection/>
      <Cards/>
      <Cities/>
      <MobileVersion/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import Cards from './Components/HeroSection/Cards/Cards';
import HeroSection from './Components/HeroSection/Main/HeroSection';
// import HotelRegistartion from './Components/Registration/HotelRegistartion';
function App() {
  return (
    <div className="App">
      {/* <HotelRegistartion/> */}
      <Navbar/>
      <HeroSection/>
      <Cards/>
    </div>
  );
}

export default App;

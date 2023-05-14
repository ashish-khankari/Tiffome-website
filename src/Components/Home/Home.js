import Footer from "./Footer/Footer"
import Cards from "./Cards/Cards"
import MobileVersion from "./MobileVersion/MobileVersion"
import HeroSection from "./Main/HeroSection"
import { Cities } from "./Cities/Cities"
import Navbar from "./Navbar/Navbar"
import { NewsLetter } from "./NewsLetter/NewsLetter"
import RegisterHotel from "./RegisterHotel/RegisterHotel"
export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Cards />
            <Cities />
           <RegisterHotel/>
            <MobileVersion />
            <NewsLetter/>
            <Footer />
        </div>
    )
}

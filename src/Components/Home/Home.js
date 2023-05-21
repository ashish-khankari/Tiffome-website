import Cards from "./Cards/Cards"
import MobileVersion from "./MobileVersion/MobileVersion"
import HeroSection from "./Main/HeroSection"
import { Cities } from "./Cities/Cities"
import { NewsLetter } from "./NewsLetter/NewsLetter"
import RegisterHotel from "./RegisterHotel/RegisterHotel"

export default function Home() {
    // const 
    return (
        <div>
            
            <HeroSection />
            <Cards />
            <Cities />
            <RegisterHotel />
            <MobileVersion />
            <NewsLetter />
           
        </div>
    )
}

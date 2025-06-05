import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
   <div className="w-full">
    <Navbar/>
    <HeroSection/>
    <AboutUs id="about"/>
    <Services id="services"/>
    <Portfolio id="portfolio"/>
    <ContactUs id="appointment"/>
    <Details id="contact"/>
    <Footer/>
   </div>
  );
}

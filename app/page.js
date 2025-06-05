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
    <AboutUs/>
    <Services/>
    <Portfolio/>
    <ContactUs/>
    <Details/>
    <Footer/>
   </div>
  );
}

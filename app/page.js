import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
   <div className="w-full">
    <Navbar/>
    <HeroSection/>
    <AboutUs/>
    <Services/>
   </div>
  );
}

import Image from "next/image";
import HeroSectionImg1 from "../public/assets/images/90FLORA.png";
import HeroSectionImg2 from "../public/assets/images/hero.png";

function HeroSection() {
  return (
    <div className="w-full">
      <Image 
      src={HeroSectionImg1}
      alt="90flora"
      className="w-[90%] mx-auto py-10 "
      />
      <Image 
      src={HeroSectionImg2}
      alt="90flora"
      className="w-full mx-auto"
      />
    </div>
  );
}

export default HeroSection;

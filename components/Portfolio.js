import Image from "next/image";
import Image1 from "../public/assets/images/p1.png";
import Image2 from "../public/assets/images/p2.png";
import Image3 from "../public/assets/images/p3.png";
import Image4 from "../public/assets/images/p4.png";
import Image5 from "../public/assets/images/p5.png";
import Image6 from "../public/assets/images/p6.png";
import Image7 from "../public/assets/images/p7.png";
import Star from "../public/assets/images/star.png";

function Portfolio() {
  return (
    <div className="w-full">
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-3 min-h-[350px]">
          <div className="border-[3px] border-white">
            <Image src={Image1} alt="image1" />
          </div>
          <div className="border-[3px] border-white">
            <Image src={Image2} alt="image1" />
          </div>
          <div className="border-[3px] border-white">
            <Image src={Image3} alt="image1" />
          </div>
        </div>
        <div className="grid grid-cols-3 min-h-[350px]">
          <div className="border-[3px] border-white col-span-2 bg-red-300">
             <Image src={Image4} alt="image1" />
          </div>
          <div className="border-[3px] border-white">
            <Image src={Image5} alt="image1" />
          </div>
        </div>
        <div className="grid grid-cols-3 min-h-[350px]">
          <div className="border-[3px] border-white">
            <Image src={Image6} alt="image1" />
          </div>
          <div className="border-[3px] border-white col-span-2 bg-red-300">
             <Image src={Image7} alt="image1" />
          </div>
        </div>

        <div className="min-h-[100px] flex items-center justify-center bg-[#0B2017] text-white hover:bg-[#F9D0BD] hover:text-[#0B2017] gap-2">
          <p className="tracking-[20px] uppercase text-2xl">show more</p>
          <Image src={Star} alt="star" width={30} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

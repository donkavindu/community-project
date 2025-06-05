import Image from "next/image";
import Star from "../public/assets/images/star.png";

function Service() {
  return (
    <div className="border-[3px] border-white bg-[#0B2017] text-white hover:bg-[#F9D0BD] hover:text-[#0B2017] min-h-[300px] flex items-end relative">
      <p className="text-xl font-[100] uppercase tracking-[3px]">
        Centrepieces
      </p>
      <Image
        src={Star}
        alt="90flora"
        width={30}
        className="absolute top-[5%] right-[5%]"
      />
    </div>
  );
}

export default Service;

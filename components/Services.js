import Image from "next/image";
import Star from "../public/assets/images/star.png";
import Service from "./Service";

function Services() {
  return (
    <div className="w-full">
      <div className="w-full pt-10 mx-auto ">
        <div className="grid grid-cols-4">
          <div>
            <Service />
          </div>
          <div>
            <Service />
          </div>
          <div>
            <Service />
          </div>
          <div>
            <Service />
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-2">
            <Service />
          </div>
          <div>
            <Service />
          </div>
          <div>
            <Service />
          </div>
        </div>
        <div className="min-h-[300px] border-[3px] border-white relative">
          <div className="imgbg z-10 absolute w-full h-full"></div>
          <div className="z-20 absolute w-full h-full bg-[#0b201781]"></div>
          <div className="z-30 absolute w-full h-full flex items-center justify-center">
            <div className="text-white tracking-[15px] uppercase text-2xl flex gap-20">
              <p>Modern</p>
              <Image src={Star} alt="star" width={30} />
              <p>Minimal</p>
              <Image src={Star} alt="star" width={30} />
              <p>Elegant</p>
              <Image src={Star} alt="star" width={30} />
              <p>Luxuriant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

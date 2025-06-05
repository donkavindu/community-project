import Image from "next/image";
import Insta from "../public/assets/images/s1.png";
import Fb from "../public/assets/images/s2.png";
import Tik from "../public/assets/images/s3.png";
function Footer() {
  return (
    <div className="w-full">
      <div className="w-full min-h-[200px] bg-[#0B2017] text-white p-5 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-5">
            <Image src={Insta} alt="image1" height={20}/>
            <Image src={Fb} alt="image1" height={20}/>
            <Image src={Tik} alt="image1" height={20}/>
        </div>
        <h3 className="text-3xl tracking-wider">LET’S BE FRIENDS</h3>
        <p className="text-center">We strive to provide unique and minimal designs that reflect your style and make your event unforgettable. We look<br/>forward to helping you create beautiful memories!</p>
      </div>
      
    </div>
  )
}

export default Footer

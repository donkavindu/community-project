import Image from "next/image";
import AboutSecImg from "../public/assets/images/about.png";

function AboutUs({id}) {
  return (
    <div id={id}  className="w-full">
      <div className="w-[95%] py-10 mx-auto flex items-center gap-10">
        <div className="flex-[1]">
          <Image
            src={AboutSecImg}
            alt="90flora"
            className="w-full mx-auto py-10 "
          />
        </div>
        <div className="flex-[2]">
          <p className="w-[75%] mx-auto">
            At 90 Flora, we believe that every event is a unique story waiting
            to be told. Specialising in wedding decoration and event planning,
            our mission is to bring your vision to life with elegance and
            simplicity.
            <br />
            <br />
            90 Flora is not just a wedding decoration and event planning
            service; it's an experience crafted with passion, precision, and a
            touch of magic. Our designs are rooted in minimalism, ensuring that
            every detail is thoughtfully curated to create a harmonious and
            stunning visual impact.
            <br />
            <br />
            At 90 Flora, we are committed to making your dreams come true.
            Contact us today to schedule a consultation and discover how we can
            turn your vision into reality. With 90 Flora, your event will be a
            masterpiece of minimalism and elegance, crafted with care and love.
          </p>
        </div>
        <div className="flex-[1] text-center">
          <h3 className="text-3xl font-bold">CHINTHAKA KASUN</h3>
          <p>
            Founder at 90Flora<br/>Batchelor of Fine Arts (Special)<br/>University of
            the Visual and Performing Arts
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

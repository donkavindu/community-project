'use client';

export default function Navbar() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto py-5">
        <ul className="flex justify-between">
          <li className="p-2">
            <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')}>SERVICES</a>
          </li>
          <li className="p-2">
            <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, 'portfolio')}>PORTFOLIO</a>
          </li>
          <li className="p-2">
            <a href="#appointment" onClick={(e) => handleSmoothScroll(e, 'appointment')}>APPOINTMENT SCHEDULE</a>
          </li>
          <li className="p-2">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>ABOUT US</a>
          </li>
          <li className="p-2">
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
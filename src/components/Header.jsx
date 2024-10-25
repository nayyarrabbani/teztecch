import { useState } from "react";
import logoImage from "../assets/images/tez-logo.png";
import { Mail, PhoneCall } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white transition-all duration-500 z-50 fixed top-0 left-0 right-0">
      <div className="bg-secondary-950 text-white py-2 px-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between lg:justify-start gap-5">
          <div className="flex items-center gap-2 text-xs lg:text-base">
            <PhoneCall size={16} />
            <span>+91 89566 10799</span>
          </div>
          <div className="flex items-center gap-2 text-xs lg:text-base">
            <Mail size={16} />
            <span>hr@teztecch.com</span>
          </div>
        </div>
      </div>
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto py-2 px-4 relative">
        <img src={logoImage} alt="TezTech Logo" className="w-12 lg:w-16" />
        <div className="text-3xl cursor-pointer lg:hidden" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul
          className={`flex gap-7 lg:gap-5 xl:gap-7 font-bold lg:flex-row flex-col absolute lg:static top-16 left-0 right-0 bg-white text-center py-10 lg:py-5 px-5 z-10 ${
            isMenuOpen ? "flex" : "hidden lg:flex cursor-pointer"
          }`}
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Product</li>
          <li>Programs</li>
          <li>Portfolio</li>
          <li>Clients</li>
          <li>Blog</li>
          <li>Our Culture</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { MapPin, Phone, Mail } from "lucide-react";
import logoImg from "../assets/images/tez-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="mb-6">
            <img src={logoImg} alt="" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4 text-center">
            One Complete Solution For Your Brand
          </h2>
          <p className="text-center text-sm md:text-base mb-8 max-w-2xl">
            We provide One Complete Solution for all IT services, Advertising
            and Branding Needs.
          </p>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-xs md:text-sm">
                Plot 1/A/K, Beside Gajanan Primary School, Ayodhya Nagar, Nagpur
                - 440 024
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-xs md:text-sm cursor-pointer md:block hidden">
                  +91 89566 10799
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-xs md:text-sm cursor-pointer md:block hidden ">
                  +91 98222 78791
                </span>
                <span className="text-xs md:text-sm cursor-pointer md:hidden block">
                  +91 89566 10799 | +91 98222 78791
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-xs md:text-sm cursor-pointer">
                info@teztecch.com
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 cursor-pointer hover:text-yellow-500">
              Website Development
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-yellow-500">
                Graphics Designing
              </li>
              <li className="cursor-pointer hover:text-yellow-500">
                Email Marketing
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 cursor-pointer hover:text-yellow-500">
              Mobile Application Development
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-yellow-500">
                Animated Videos
              </li>
              <li className="cursor-pointer hover:text-yellow-500">
                Whatsapp Marketing
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 cursor-pointer hover:text-yellow-500">
              Digital Marketing
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-yellow-500">
                SMS Marketing
              </li>
              <li className="cursor-pointer hover:text-yellow-500">
                Software Development
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {[
            "facebook",
            "instagram",
            "twitter",
            "linkedin",
            "youtube",
            "behance",
          ].map((social) => (
            <a
              key={social}
              href={`#${social}`}
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">{social}</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full flex items-center text-sm md:text-base">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3h-2v-3h4v6z" />
            </svg>
            Join Our Telegram Channel
          </button>
        </div>

        <div className="text-center text-sm">© Teztecch 2024</div>
      </div>
    </footer>
  );
};

export default Footer;

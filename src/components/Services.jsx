import websiteIcon from "../assets/images/website-Design.png";
import mobileAppIcon from "../assets/images/Service-icons-02.png";
import digitalMarketingIcon from "../assets/images/Service-icons-03.png";
import graphicsIcon from "../assets/images/Service-icons-04.png";
import smsIcon from "../assets/images/Service-icons-05.png";
import animatedIcon from "../assets/images/Service-icons-06.png";
import emailIcon from "../assets/images/Service-icons-07.png";
import whatsappIcon from "../assets/images/Service-icons-08.png";
import softwareIcon from "../assets/images/Services-Icon-09.png";
import onlinePRIcon from "../assets/images/Services-Icon-10.png";
import ecommerceIcon from "../assets/images/Services-Icon-11.png";

const services = [
  { id: 1, name: "Website Development", icon: websiteIcon },
  { id: 2, name: "Mobile App Development", icon: mobileAppIcon },
  { id: 3, name: "Digital Marketing", icon: digitalMarketingIcon },
  { id: 4, name: "Graphics Designing", icon: graphicsIcon },
  { id: 5, name: "SMS Marketing", icon: smsIcon },
  { id: 6, name: "Animated Videos", icon: animatedIcon },
  { id: 7, name: "Email Marketing", icon: emailIcon },
  { id: 8, name: "Whatsapp Marketing", icon: whatsappIcon },
  { id: 9, name: "Software Development", icon: softwareIcon },
  { id: 10, name: "Online PR", icon: onlinePRIcon },
  { id: 11, name: "Ecommerce", icon: ecommerceIcon },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-[60px] flex flex-col justify-center items-center py-6">
        <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg relative transition-all duration-500 hover:bg-teal-500 hover:shadow-lg h-44"
              style={{ boxShadow: "10px 10px 0px 0px #FFD700" }}
            >
              <div className="flex justify-center items-center mb-2">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="text-yellow-500 text-4xl h-16 w-16 object-contain"
                />
              </div>
              <h2 className="text-center text-xl font-semibold pt-3">
                {service.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

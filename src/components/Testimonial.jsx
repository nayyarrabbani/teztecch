import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

const testimonialsData = [
  {
    name: "Prof SN Basu",
    title: "EX–YCCE Group",
    imageUrl: image2,
    feedback:
      "We made an order to create a website for our age-old Ashram at Benaras after searching Teztecch from Google. It was a pleasant experience to work with the dedicated & expert website company at Teztecch, Nagpur, under the management of Ms. Tejaswini Bhandarkar. I wish a bright & prosperous future for this company.",
  },
  {
    name: "Raunak Agarwal",
    title: "Rachitects",
    imageUrl: image1,
    feedback:
      "Teztecch helped our brand get access to a lot of customers by their special management of our brand's social media handlers. The agency has a great team, we highly recommend the agency for other business startups.",
  },
  {
    name: "Rashmi H Upasni",
    title: "Indoor System",
    imageUrl: image3,
    feedback:
      "They listened to me, understood my strategies, and provided solutions with honesty, integrity, and efficiency.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto px-4 lg:px-[60px] py-12 bg-[#f1c40f] text-center h-[700px]">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 py-6">
        HAPPY MARKETING TEAM + RESULT-DRIVEN <br />
        STRATEGIES <br />= HAPPY CLIENTS
      </h2>

      <h1 className="text-lg lg:text-5xl font-bold text-black mb-8 mt-9 sm:text-5xl">
        Testimonials
      </h1>
      <Slider {...settings} className="testimonials-slider">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="lg:px-4">
            <div>
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-1">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{testimonial.title}</p>
              <p className="text-sm lg:text-base italic text-gray-800">
                {testimonial.feedback}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .slick-dots {
          margin-bottom: -80px; 
        }
        .slick-dots li button:before {
          color:#dbd8e3; 
          font-size: 14px;
         }
        .slick-dots li.slick-active button:before {
          color: #d1d5db; 
        }
          
      `}</style>
    </div>
  );
};

export default Testimonials;

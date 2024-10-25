/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import AawaanImg from "../assets/images/Aawaan Ahmad.jpg";
import MuneerImg from "../assets/images/Muneer Ahmad.jpg";
import VishalImg from "../assets/images/Vishal Agrawal.jpg";
import RahulImg from "../assets/images/Rahul Dangaye.jpg";
import TejImg from "../assets/images/tej.png";

const TeamMember = ({ name, title, image }) => {
  return (
    <div className="bg-[#00403d] p-5 rounded-lg text-white text-center transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-3 border-[#ffd700]"
      />
      <h4 className="text-xl font-bold mb-1">{name}</h4>
      <p className="text-base">{title}</p>
    </div>
  );
};

const OurTeam = () => {
  const founderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (founderRef.current) {
      observer.observe(founderRef.current);
    }

    return () => {
      if (founderRef.current) {
        observer.unobserve(founderRef.current);
      }
    };
  }, []);

  return (
    <div className="px-4 lg:w-[90%] mx-auto py-12 lg:px-[60px]">
      <h2 className="text-4xl font-bold text-black mb-8 text-center">
        OUR TEAM
      </h2>
      <div
        ref={founderRef}
        className={`text-center transition-opacity duration-600 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={TejImg}
          alt="Founder"
          className="w-48 h-48 rounded-full object-cover mx-auto mb-5 border-5 border-[#ffd700]"
        />
        <h3 className="text-sm lg:text-lg font-bold mb-2 text-black">
          FOUNDER & DIRECTOR
        </h3>
        <p className="lg:text-lg font-bold mb-2 text-black">
          A Dynamic Girl who represents aspirations & hopes like a phoenix!
        </p>
        <p className="text-xs max-w-3xl mx-auto mb-5 lg:text-sm text-center font-normal text-gray-700">
          A change-agent, rapacious reader, a strategist, a fluent speaker, a
          promising entrepreneur and above all a passionate Indian. All these
          epithets best describe Tejaswini Bhandarkar. Our Founder, Tejaswini
          Bhandarkar, has developed her marketing, management, and creative
          expertise over the years. Her extensive understanding and vision of
          the digital world sets her apart from the competition. After earning
          her Bachelors and Masters Degree in Computer Science, she ventured
          into the world of startup and laid the foundation for her brand -
          TezTecch. Her aim is to make Teztecch – One Complete Solution Provider
          for every Brand. She is an amazing Leader and Great Speaker too.
        </p>
        <button className="px-5 py-2 bg-[#ffd700] text-black border border-black text-base font-bold rounded hover:bg-[#ffbf00] transition-colors duration-300">
          VIEW GALLERY
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 mb-8">
        <TeamMember
          name="Muneer Ahmad"
          title="Sr. Web Developer"
          image={AawaanImg}
        />
        <TeamMember
          name="Vishal Agrawal"
          title="Sales & Marketing Head"
          image={MuneerImg}
        />
        <TeamMember
          name="Rahul Dangaye"
          title="Sales & Marketing"
          image={VishalImg}
        />
        <TeamMember
          name="Aawaan Ahmad"
          title="Sr. Frontend Developer"
          image={RahulImg}
        />
      </div>
      <div className="text-center">
        <button className="px-8 py-3 bg-black text-white text-lg rounded hover:bg-[#ffbf00] transition-colors duration-300">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default OurTeam;

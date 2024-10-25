/* eslint-disable react/prop-types */
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";

import suruchi from "../assets/images/suruchi.jpg";
import sarja from "../assets/images/sarja.jpg";
import queens from "../assets/images/queens.jpg";
import vibroxx from "../assets/images/vibroxx.jpg";
import dashboard from "../assets/images/dashboard.png";
import mobile from "../assets/images/mobile.jpg";
import scentwala from "../assets/images/scentwala.jpg";
import visual from "../assets/images/visual.jpg";

const portfolioItems = [
  { id: 1, image: suruchi, title: "Suruchi Ketchup" },
  { id: 2, image: sarja, title: "Sarla" },
  { id: 3, image: queens, title: "Queen's Lawn" },
  { id: 4, image: vibroxx, title: "Vibroxx" },
  { id: 5, image: dashboard, title: "Dashboard" },
  { id: 6, image: mobile, title: "Mobile Enabled" },
  { id: 7, image: scentwala, title: "Scentwala" },
  { id: 8, image: visual, title: "Visual" },
];

const tabs = [
  { title: "Website Design & Development", color: "bg-white" },
  { title: "Digital Marketing", color: "bg-yellow-500" },
  { title: "Animation", color: "bg-yellow-500" },
  { title: "Graphics", color: "bg-yellow-500" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Website Design & Development");

  return (
    <div className="bg-black text-white">
      <div className="py-12 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Portfolio
        </h2>

        <div className="py-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm lg:text-base">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-6 py-3  font-semibold ${
                  tab.color
                } text-black hover:bg-white ${
                  activeTab === tab.title &&
                  tab.title !== "Website Design & Development"
                    ? "ring-4"
                    : ""
                }`}
                onClick={() => setActiveTab(tab.title)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="bg-yellow-400 px-4 py-2 text-black font-bold hover:bg-yellow-500">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

/* eslint-disable react/no-unescaped-entities */
import careerImg from "../assets/images/career-img.jpg";

const CareersSection = () => {
  return (
    <div className="px-4 mx-auto lg:px-[20px] py-12 font-sans">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">
        Careers
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full md:w-1/2 lg:w-[45%] mb-8 lg:mb-0 relative">
          <img
            src={careerImg}
            alt="Join Us"
            className="w-full mx-auto h-auto"
          />
        </div>
        <form className="w-full sm:w-[90%] mx-auto md:w-[80%] lg:w-[45%] bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
          <h2 className="lg:text-2xl mb-4 text-center text-gray-900 font-medium">
            Application Form
          </h2>
          <div className="mb-4 text-sm lg:text-base">
            <label htmlFor="name" className="block mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 text-sm lg:text-base">
            <label htmlFor="email" className="block mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 text-sm lg:text-base">
            <label htmlFor="phone" className="block mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="resume" className="block mb-1 text-sm lg:text-base">
              Resume *
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md font-bold hover:bg-gray-800 transition-colors duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareersSection;

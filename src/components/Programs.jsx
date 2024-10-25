import eventsImage from "../assets/images/events.png";
import communityImage from "../assets/images/teztecch-community.png";
import shootsImage from "../assets/images/shoots.png";
import internshipImage from "../assets/images/internshala.png";

const Programs = () => {
  return (
    <div className="container mx-auto lg:w-[90%]">
      <div className="programs-section text-center py-12 px-5">
        <h2 className="text-4xl font-bold text-black mb-8">Our Programs</h2>
        <div className="programs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 justify-center">
          <div className="program-card lg:p-5 m-3 transition-transform duration-300 hover:scale-105">
            <div className="program-card1 w-24 lg:w-[150px] lg:h-[150px] rounded-full flex items-center justify-center bg-[#00403d] m-auto p-5 shadow-[0_0_6px_#00403d,_0_0_12px_#00403d]">
              <img
                src={eventsImage}
                alt="Teztecch Events"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="pt-5 text-lg font-bold">Teztecch Events</h3>
            <p className="mt-2 mb-4 text-xs md:text-sm lg:text-base">
              Exciting tech conferences, workshops, and hackathons for
              innovation.
            </p>
          </div>
          <div className="program-card p-0 m-3 transition-transform duration-300 hover:scale-105">
            <div className="program-card1 w-24 lg:w-[150px] lg:h-[150px] rounded-full flex items-center justify-center bg-[#00403d] m-auto p-5 shadow-[0_0_6px_#00403d,_0_0_12px_#00403d]">
              <img
                src={communityImage}
                alt="Teztecch Community"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="pt-2 text-lg font-bold">Teztecch Community</h3>
            <p className="mt-2 mb-4 text-xs md:text-sm lg:text-base">
              Where innovative and tech-savvy minds connect and collaborate.
            </p>
          </div>
          <div className="program-card lg:p-5 m-3 transition-transform duration-300 hover:scale-105">
            <div className="program-card1 w-24 lg:w-[150px] lg:h-[150px] rounded-full flex items-center justify-center bg-[#00403d] m-auto p-5 shadow-[0_0_6px_#00403d,_0_0_12px_#00403d]">
              <img
                src={shootsImage}
                alt="Teztecch Shoots"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="pt-2 text-lg font-bold">Teztecch Shoots</h3>
            <p className="mt-2 mb-4 text-xs md:text-sm lg:text-base">
              Capturing tech trends and innovations through stunning visual
              content.
            </p>
          </div>
          <div className="program-card lg:p-5 m-3 transition-transform duration-300 hover:scale-105">
            <div className="program-card1 w-24 lg:w-[150px] lg:h-[150px] rounded-full flex items-center justify-center bg-[#00403d] m-auto p-5 shadow-[0_0_6px_#00403d,_0_0_12px_#00403d]">
              <img
                src={internshipImage}
                alt="Teztecch Internshala"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="pt-2 text-lg font-bold">Teztecch Internshala</h3>
            <p className="mt-2 mb-4 text-xs md:text-sm lg:text-base">
              Bridging the gap between tech students and industry with
              meaningful internships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

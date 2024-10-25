import divideImg from "../assets/images/dividerimg.png";
const AboutUs = () => {
  return (
    <div className="bg-primary-500 py-12 flex-col flex gap-5 items-center justify-center px-4">
      <h1 className="text-base lg:text-5xl font-bold">[About TEZTECCH]</h1>

      <h2 className="text-center text-sm lg:text-xl font-bold">
        We are a Nagpur-based, One-stop, Full-service IT,
        <span className="block sm:hidden">Branding & Advertising Company</span>
        <span className="hidden sm:inline">Branding & Advertising Company</span>
      </h2>
      <div className="flex flex-col gap-5 items-center mt-5">
        <span className="font-bold text-2xl lg:text-3xl w-fit relative ">
          What we do?
          <img className="absolute inset-x-0" src={divideImg} alt="line" />
        </span>
        <div className="py-3 px-4 bg-white text-black font-bold lg:text-xl rounded-full shadow-[2px_5px_0px_0px_rgba(0,_0,_0,_0.3)] flex items-center justify-center text-center">
          <p>Hum Aapka Kaam Aasan Karte Hein!</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center mt-5">
        <span className="font-bold text-lg lg:text-3xl w-fit relative">
          How?
          <img className="absolute inset-x-0" src={divideImg} alt="line" />
        </span>
        <div className="flex flex-col gap-0 items-center">
          <span className="font-bold text-xl lg:text-2xl leading-none w-fit relative ">
            Apka Problem
          </span>
          <span className="font-bold text-xl lg:text-2xl leading-none w-fit relative ">
            +
          </span>
          <span className="font-bold text-xl lg:text-2xl leading-none w-fit relative ">
            Apka Vision
          </span>
          <span className="font-bold text-xl lg:text-2xl leading-none w-fit relative ">
            +
          </span>
          <span className="font-bold text-xl lg:text-2xl leading-none w-fit relative ">
            Aapka Budget
          </span>
        </div>
        <p className="w-fit px-4 py-3 bg-white text-black font-bold lg:text-xl rounded-full shadow-[2px_5px_0px_0px_rgba(0,_0,_0,_0.3)]">
          = Hamara Solution
        </p>
      </div>

      <div className="flex flex-col gap-5 items-center mt-5">
        <span className="font-bold text-lg lg:text-3xl w-fit relative ">
          Result?
          <img className="absolute inset-x-0" src={divideImg} alt="line" />
        </span>

        <p className="font-bold text-sm lg:text-lg leading-6 w-fit relative text-center max-w-[90%] sm:max-w-[50%]">
          To Build Credibility + To Generate more and more Business + Promote
          Goodwill + Increase Brand value + To win over corona and such kind of
          pandemics + to Build your own clients community who are working for
          you as your MARKETING AGENTS
        </p>

        <p className="w-fit px-4 py-3 bg-white text-black font-bold lg:text-xl rounded-full shadow-[2px_5px_0px_0px_rgba(0,_0,_0,_0.3)] text-center">
          = GROWTH OF YOUR BUSINESS
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

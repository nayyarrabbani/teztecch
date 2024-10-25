/* eslint-disable react/prop-types */
const PortfolioItem = ({ image, title }) => {
  return (
    <div className="relative overflow-hidden w-full md:w-1/3 lg:w-1/4 px-[-12px]">
      <img
        src={image}
        alt={title}
        className="w-[400px] h-48 transition-transform duration-500 ease-in-out transform hover:scale-110 mx-auto"
      />
      <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center transform translate-y-full transition-transform duration-500 ease-in-out hover:translate-y-0">
        <h3 className="py-2">{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioItem;

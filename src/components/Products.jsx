import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";

const products = [
  {
    title: "Mini Website + E-Broucher",
    buttonText: "KNOW MORE",
    imageUrl: image1,
  },
  {
    title: "Digital Event Card",
    buttonText: "KNOW MORE",
    imageUrl: image2,
  },
  {
    title: "Digital Company Profile",
    buttonText: "DOWNLOAD",
    imageUrl: image3,
  },
];

const Products = () => {
  return (
    <div
      className="relative text-center bg-cover bg-center py-20 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 lg:w-[90%] mx-auto ">
        <h2 className="text-4xl font-bold text-white mb-8 ">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              className="bg-yellow-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden max-w-sm mx-auto"
              key={index}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="lg:text-xl font-semibold text-black mb-2">
                  {product.title}
                </h3>
                <button className="bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-white hover:text-black border hover:border-black transition-colors text-sm lg:text-base">
                  {product.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

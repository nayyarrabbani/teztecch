const WriteToUsForm = () => {
  return (
    <div className="mx-auto py-0 px-4 lg:px-[60px] mx-auto relative h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1682140999442-e9e2a5f55be6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold text-white mb-8 ">Write To Us:</h1>
        <form className="w-full lg:max-w-[800px] flex flex-col gap-8 items-center">
          <input
            type="text"
            placeholder="Name"
            className="w-full max-w-4xl p-2 border-none rounded-md text-sm lg:text-[16px] h-[50px]"
          />
          <input
            type="tel"
            placeholder="Mobile"
            className="w-full max-w-4xl p-2 border-none rounded-md text-sm lg:text-[16px] h-[50px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-4xl p-2 border-none rounded-md text-sm lg:text-[16px] h-[50px]"
          />
          <textarea
            className="w-full max-w-4xl p-2 border-none rounded-md text-sm lg:text-[16px] resize-y h-[150px]"
            placeholder="Message"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white border-none p-4 rounded-md cursor-pointer w-24 font-poppins"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteToUsForm;

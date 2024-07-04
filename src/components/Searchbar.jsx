import { FaArrowRight } from "react-icons/fa";
export default function Searchbar() {
  return (
    <>
      <div className="bg-[#fff4d7] lg:h-screen lg:w-screen sm:h-full w-full sm:px-20 sm:py-14 p-5  ">
        <div className="bg-hero rounded bg-cover h-full text-white flex flex-col items-center justify-center md:p-10 p-5  ">
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold">
            Explore The World With Food
          </h1>
          <span className="sm:my-5 my-2 lg:text-2xl md:text-xl">
            1M+ Recipes at your fingertips
          </span>
          <div className="sm:flex">
            <input
              type="text"
              className=" lg:w-[500px] md:w-[300px] sm:w-[150px] sm-[100px] py-2 lg:px-10 px-5  text-sm rounded text-gray-700 outline-none flex-1"
              placeholder="Search here"
            />
            <button className="py-2 px-5 sm:mt-0 mt-5 bg-black">
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

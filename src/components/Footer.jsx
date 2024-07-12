import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 p-10 justify-centent mt-52 bg-pink">
        <div className="flex flex-col items-center md:my-0 my-5  px-10 ">
          <h1 className="text-brown font-text text-2xl text-center">
            Ready To Cook ?
          </h1>
          <div className="flex items-center relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="mt-5 bg-white w-full py-2 px-5 rounded-full"
            />
            <IoIosSearch className="absolute right-5 bottom-2  text-xl text-brown " />
          </div>
        </div>
        <div className="flex justify-center text-center  md:text-left  md:my-0 my-5 ">
          <ul>
            <li className="py-1 hover:underline hover:font-semibold hover:cursor-pointer duration-75 ">
              Recipes
            </li>
            <li className="py-1 hover:underline hover:font-semibold hover:cursor-pointer duration-75">
              Blog
            </li>
            <li className="py-1 hover:underline hover:font-semibold hover:cursor-pointer duration-75">
              About Us
            </li>
            <li className="py-1 hover:underline hover:font-semibold hover:cursor-pointer duration-75">
              Add Your Recipe
            </li>
            <li className="py-1 hover:underline hover:font-semibold hover:cursor-pointer duration-75">
              Term of Use
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:my-0 my-5  ">
          <h1 className="font-bold py-2">Contact</h1>
          <span className="hover:underline hover:font-semibold hover:cursor-pointer duration-75">
            flavorquest@gmail.com
          </span>
          <h1 className="font-bold py-2">Subscribe</h1>
          <div className="flex">
            <FaFacebook className="mx-2" />
            <FaInstagramSquare className="mx-2" />
            <FaSquareXTwitter className="mx-2" />
          </div>
        </div>
      </div>
    </>
  );
}

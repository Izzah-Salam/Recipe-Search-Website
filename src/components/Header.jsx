import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex justify-between backdrop-blur-sm bg-white/30 items-center w-full fixed z-10 px-16 py-6 font-text  ">
        <div className=" text-brown  font-bold text-xl">FlavorQuest</div>
        {/* ....... Toggle Condition .......... */}

        {toggle ? (
          <IoMdClose
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl md:hidden block"
          />
        ) : (
          <IoIosMenu
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl md:hidden block"
          />
        )}

        <div className="hidden md:flex justify-between items-center">
          <ul className="flex justify-center ">
            <li className="mx-3">
              <Link
                className="hover:border-b-2 border-brown duration-75 "
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="mx-3">
              <a className="hover:border-b-2 border-brown duration-75 " href="">
                Recipes
              </a>
            </li>
            <li className="mx-3">
              <a className="hover:border-b-2 border-brown duration-75 " href="">
                Blog
              </a>
            </li>
            <li className="mx-3">
              <a className="hover:border-b-2 border-brown duration-75 " href="">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className=" hidden md:block bg-pink rounded-full px-3 py-2">
          <a href="">contact us</a>
        </div>
      </div>

      {/* responsive condition */}
      <ul
        className={`md:hidden fixed bg-pink text-brown font-bold top-[68px] z-10 h-screen w-full duration-300
                ${toggle ? "left-[0]" : "left-[-100%]"}
                
                `}
      >
        <li className="p-5 ">Home</li>
        <hr className="mx-2" />
        <li className="p-5">Recip</li>
        <hr className="mx-2" />
        <li className="p-5">Blog</li>
        <hr className="mx-2" />
        <li className="p-5">About</li>
        <hr className="mx-2" />
        <li className="p-5">Contact</li>
      </ul>
    </>
  );
}

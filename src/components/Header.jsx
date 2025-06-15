import { FaBars, FaRocketchat } from "react-icons/fa6";
import About from "../Pages/About";
import Main from "./Main";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import MySkills from "../Pages/MySkills";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between fixed w-full left-0 top-0 lg:px-12 px-5 bg-blue-100 opacity-90 shadow-2xl shadow-purple-400 z-50">
        <div className="p-1">
          <a href="/" className="">
            <h1 className="text-fuchsia-700  hover:text-fuchsia-900 md:text-3xl text-2xl">
              Aman
            </h1>
          </a>

           {/* navbar for mobile responsive */}
        <ul className={`fixed top-[40px] text-center pt-2 bg-blue-500 text-white sm:hidden right-0 h-screen z-40 w-[70%] transform transition-transform duration-500 ease-in-out
          ${
            IsMenuOpen
              ? "translate-x-0 shadow-2xl shadow-black"
              : "translate-x-full "
          }`}>
        <li className="lg:text-xl font-bold font-sans transition-all duration-300  active:text-gray-800 rounded-md py-2 px-3 hover:text-gray-600">
           <a href="#">Home</a>
            </li>
            <li className="lg:text-xl font-bold font-sans transition-all duration-300  active:text-gray-800 rounded-md py-2 px-3 hover:text-gray-600">
              <a href="#about">About</a>
            </li>
            <li className="lg:text-xl font-bold font-sans transition-all duration-300  active:text-gray-800 rounded-md py-2 px-3 hover:text-gray-600">
              <a href="#service">Service</a>
            </li>
            <li className="lg:text-xl font-bold font-sans transition-all duration-300  active:text-gray-800 rounded-md py-2 px-3 hover:text-gray-600">
              <a href="#project">Project</a>
            </li>
            <li className="lg:text-xl font-bold font-sans transition-all duration-300  active:text-gray-800 rounded-md py-2 px-3 hover:text-gray-600">
              <a href="#blog">Blog</a>
            </li>
            <li className="lg:text-xl font-bold font-sans transition-all duration-300  active:text-gray-800 rounded-md py-2 px-3 hover:text-gray-600">
              <a href="#my_skill">My Skills</a>
            </li>
            <li className="lg:text-xl font-bold font-sans transition-all duration-300  active:text-gray-800 rounded-md py-2 px-3 hover:text-gray-600">
              <a href="#contact">Contact</a>
            </li>
        </ul>

        </div>

       
        <div>
          <ul className="hidden md:flex gap-2">
            <li className="text-sm font-bold font-sans transition-all duration-300 active:text-black  hover:bg-fuchsia-600 py-3 px-3 hover:text-white">
              <a href="#">Home</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300  active:text-black  hover:bg-fuchsia-600 py-3 px-3 hover:text-white">
              <a href="#about">About</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300  active:text-black  hover:bg-fuchsia-600 py-3 px-3 hover:text-white">
              <a href="#service">Service</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300  active:text-black  hover:bg-fuchsia-600 py-3 px-3 hover:text-white">
              <a href="#project">Project</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300  active:text-black  hover:bg-fuchsia-600 py-3 px-3 hover:text-white">
              <a href="#blog">Blog</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300  active:text-black  hover:bg-fuchsia-600 py-3 px-3 hover:text-white">
              <a href="#my_skill">My Skills</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300  active:text-black  hover:bg-fuchsia-600 py-3 px-3 hover:text-white">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="hover:cursor-pointer text-xl pt-3 sm:text-2xl">
                { IsMenuOpen ? (<FaTimes/>)   : (<FaBars/>)}             
            </button>
          </div>
          <button className="bg-purple-700 text-white sm:px-3 sm:py-3 rounded-md hover:bg-purple-900 p-1 mt-1 sm:mt-0 active:bg-purple-900 text-sm h-fit">
            <a href="#" className="flex gap-2 font-bold">
              Let's chat{" "}
              <span className="text-white  text-[19px] pt-1">
                <FaRocketchat />
              </span>
            </a>
          </button>
        </div>
      </div>
      <div>
        <Main />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="service">
        <Services />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="my_skill">
        <MySkills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Header;

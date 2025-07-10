import { FaBars } from "react-icons/fa6";
import About from "../Pages/About";
import Main from "./Main";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import MySkills from "../Pages/MySkills";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleStates, setToggleStates] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  const toggle = () => {
    setToggleStates(!toggleStates)
  }
  return (
    <>
      <div className={`flex justify-between fixed w-full left-0 top-0 lg:px-12 px-5  opacity-90 shadow-2xl py-2 sm:py-0 shadow-purple-400 z-50 ${toggleStates ? 'bg-black text-white': 'bg-gray-100'}`}>
        <div className="p-1">
          <a href="/" className="">
            <h1 className="text-fuchsia-700  hover:text-fuchsia-900 md:text-3xl text-2xl">
              Aman
            </h1>
          </a>

          {/* navbar for mobile responsive */}
          <ul className={`fixed top-[57px] text-center pt-2 bg-blue-500 text-white sm:hidden right-0 h-screen z-40 w-[70%] transform transition-transform duration-500 ease-in-out
          ${IsMenuOpen
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
          <ul className="hidden md:flex gap-2" id="navbar">
            <li className="text-sm font-bold font-sans transition-all duration-30 relative overflow-hidden py-3 px-3">
              <a href="#">Home</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300 relative overflow-hidden py-3 px-3">
              <a href="#about">About</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300 relative overflow-hidden py-3 px-3">
              <a href="#service">Service</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300 relative overflow-hidden py-3 px-3">
              <a href="#project">Project</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300 relative overflow-hidden py-3 px-3">
              <a href="#blog">Blog</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300 relative overflow-hidden py-3 px-3">
              <a href="#my_skill">My Skills</a>
            </li>
            <li className="text-sm font-bold font-sans transition-all duration-300 relative overflow-hidden py-3 px-3">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="hover:cursor-pointer text-xl pt-3 sm:text-2xl">
              {IsMenuOpen ? (<FaTimes />) : (<FaBars />)}
            </button>
          </div>
          <div className="flex gap-1 mt-1.5">
            <p className="text-sm pt-1.5">Mode</p>
            <div
              className={`h-6 w-12 mt-1 rounded-2xl cursor-pointer transition-all duration-300 flex p-1 ${toggleStates ? 'bg-white' : 'bg-black'}`}
              onClick={toggle}
            >
              <button
                className={` cursor-pointer h-4 w-4 rounded-[50%] transition-all duration-500 ${toggleStates ? 'translate-x-6 bg-black' : 'translate-x-0 bg-white'}`}
              ></button>
            </div>
          </div>

        </div>
      </div>
      <div className={`${toggleStates ? 'bg-gray-900 text-white': 'bg-gray-100'}`}>
        <Main />
      </div>
      <div id="about" className={`${toggleStates ? 'bg-gray-900 text-white': 'bg-gray-100'}`}>
        <About />
      </div>
      <div id="service" className={`${toggleStates ? 'bg-gray-900 text-white': 'bg-gray-100'}`}>
        <Services />
      </div>
      <div id="project" className={`${toggleStates ? 'bg-gray-900': 'bg-gray-100'}`}>
        <Projects />
      </div>
      <div id="blog" className={`${toggleStates ? 'bg-gray-900 ': 'bg-gray-100'}`}>
        <Blog />
      </div>
      <div id="my_skill" className={`${toggleStates ? 'bg-gray-900 text-white': 'bg-gray-100'}`}>
        <MySkills />
      </div>
      <div id="contact" className={`${toggleStates ? 'bg-gray-900 text-white': 'bg-gray-100'}`}>
        <Contact />
      </div>
    </>
  );
};

export default Header;

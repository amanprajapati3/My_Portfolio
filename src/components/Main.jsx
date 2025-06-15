import "./Main.css";
import { FaArrowRight } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Main = () => {
  return (
    <>
      <div className="bg-[url(https://wallpapers.com/images/hd/light-color-background-vmkuihk29pi1xq65.jpg)] lg:p-20 md:p-10 pt-12 pl-6">
        <div className="flex lg:px-12 pt-10 flex-wrap md:flex-nowrap g lg:gap-2">
          <div className=" md:w-full" id="slide_from_right">
            <p className="font-light text-md pb-3">WELCOME TO MY WORLD</p>
            <h1 className="md:text-3xl text-2xl pb-4 font-extrabold">
              Hi I'm Aman Prajapati
            </h1>
            <div id="text_animation" className="md:text-3xl text-2xl">
              Frontend Dev
            </div>
            <p className="pt-10 text-sm w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis exercitationem excepturi autem natus sint facere fugiat
              totam doloremque eaque reprehenderit accusamus sequi dolore qui,
              temporibus tempora repell
            </p>
            <span className="flex sm:gap-5 gap-2 mt-10">
              <button className="flex lg:gap-3 gap-2 sm:text-md text-white bg-fuchsia-700 p-2 rounded-md active:bg-purple-800 hover:bg-purple-700 cursor-pointer">
                Hire Me Now !{" "}
                <span className="pt-1">
                  <FaArrowRight />
                </span>
              </button>
              <button className="flex lg:gap-3 gap-2 sm:text-md text-white bg-red-700 p-2 rounded-md active:bg-red-900 hover:bg-red-900 cursor-pointer">
                Download CV{" "}
                <span className="pt-1">
                  <FiDownload />
                </span>
              </button>
            </span>
            <div className="flex gap-2 my-12">
              <span
                title="instagram"
                className="border-b-purple-600 transition-all duration-300 hover:scale-125 hover:bg-violet-700 border-t-pink-500 border-r-violet-600 border-l-fuchsia-600 border-4 rounded-[50%] p-2 "
              >
                <a
                  href="https://www.instagram.com/_sid414/" // Replace with your number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-900 hover:text-white text-3xl"
                >
                  <FaInstagramSquare />
                </a>
              </span>
              <span
                title="Github"
                className="border-b-purple-600 transition-all duration-300 hover:scale-125 border-t-pink-500 border-r-violet-600 hover:bg-black border-l-fuchsia-600 border-4 rounded-[50%] p-2 "
              >
                <a
                  href="https://github.com/amanprajapati3"
                  className="text-black hover:text-white text-3xl"
                >
                  <BiLogoGithub />
                </a>
              </span>
              <span
                title="telegram"
                className="border-b-purple-600 transition-all duration-300 hover:scale-125 border-t-pink-500 border-r-violet-600 hover:bg-blue-500 border-l-fuchsia-600 border-4 rounded-[50%] p-2 "
              >
                <a
                  href="https://t.me/@sid_layakcoder" // Replace with your number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-white text-3xl"
                >
                  <FaTelegramPlane />
                </a>
              </span>
              <span
                title="whatsapp"
                className="border-b-purple-600 transition-all duration-300 hover:scale-125 border-t-pink-500 border-r-violet-600 hover:bg-green-700 border-l-fuchsia-600 border-4 rounded-[50%] p-2 "
              >
                <a
                  href="https://wa.me/917217814501" // Replace with your number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-white text-3xl"
                >
                  <IoLogoWhatsapp />
                </a>
              </span>
            </div>
          </div>
          <div className=" " id="slide_from_left">
            <div
              id="profile_photo"
              className=" rounded-[50%] p-[7px] bg-gradient-to-r from-blue-500 to-purple-500"
            >
              <img
                src="public/Person_img.png"
                alt="img"
                className="lg:w-[500px] relative w-[300px] rounded-[50%] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

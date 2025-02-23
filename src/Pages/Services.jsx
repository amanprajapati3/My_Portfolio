import { IoIosApps } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import "./Animated_scroll.css";

const Services = () => {
  return (
    <>
      <div className="bg-[url('https://wallpapers.com/images/hd/light-color-background-vmkuihk29pi1xq65.jpg')] bg-cover bg-center md:pt-5 pt-16 px-5 pb-20">
        <h1 className="text-center text-red-600 lg:text-5xl text-3xl pt-5">
          My Services
        </h1>
        <p className="text-center text-2xl font-light pt-2">
          WHAT I WILL DO FOR YOU
        </p>
        <div className="flex flex-wrap justify-center gap-5  px-3 mt-6">
          <div className="text-center p-4 max-w-fit bg-white rounded-xl hover:shadow-2xl transition-all duration-300 shadow-pink-300" id="slide_from_left">
            <div className="rounded-[50%] ml-[35%] my-3 p-[10px] bg-gradient-to-l from-blue-500 to-purple-500 text-6xl text-white w-fit">
              <IoIosApps />
            </div>
              <h1 className="text-3xl font-semibold py-2">App Development</h1>
              <p className="w-[350px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis dicta inventore quibusdam tenetur, odio odit nemo fuga magni alias quo, ipsam debitis corporis deleniti officiis ullam earum porro! Similique velit veritatis voluptatem aspernatur facilis nemo sequi perferendis itaque! Et?</p>
              <button className="my-5 cursor-pointer hover:bg-purple-900 rounded-md bg-purple-800 text-white text-xl py-2 px-5">
                Read More
              </button>
          </div>
          <div className="text-center p-4 bg-white rounded-xl hover:shadow-2xl transition-all duration-300 shadow-pink-300"  id="slide_from_left">
            <div className="rounded-[50%] ml-[35%] my-3 p-[10px] bg-gradient-to-l from-blue-500 to-purple-500 text-6xl text-white w-fit">
              <FaCode />
            </div>
              <h1 className="text-3xl font-semibold py-2">Web Development</h1>
              <p className="w-[350px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis dicta inventore quibusdam tenetur, odio odit nemo fuga magni alias quo, ipsam debitis corporis deleniti officiis ullam earum porro! Similique velit veritatis voluptatem aspernatur facilis nemo sequi perferendis itaque! Et?</p>
              <button className="my-5 cursor-pointer hover:bg-purple-900 rounded-md bg-purple-800 text-white text-xl py-2 px-5">
                Read More
              </button>
          </div>
          <div className="text-center p-4 bg-white rounded-xl hover:shadow-2xl transition-all duration-300 shadow-pink-300" id="slide_from_left">
            <div className="rounded-[50%] ml-[35%] my-3 p-[16px] bg-gradient-to-l from-blue-500 to-purple-500 text-5xl text-white w-fit">
              <FaDesktop />
            </div>
              <h1 className="text-3xl font-semibold py-2">UI/UX Design</h1>
              <p className="w-[350px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis dicta inventore quibusdam tenetur, odio odit nemo fuga magni alias quo, ipsam debitis corporis deleniti officiis ullam earum porro! Similique velit veritatis voluptatem aspernatur facilis nemo sequi perferendis itaque! Et?</p>
              <button className="my-5 cursor-pointer hover:bg-purple-900 rounded-md bg-purple-800 text-white text-xl py-2 px-5">
                Read More
              </button>
          </div>
          <div className="text-center p-4 bg-white rounded-xl hover:shadow-2xl transition-all duration-300 shadow-pink-300" id="slide_from_left">
            <div className="rounded-[50%] ml-[35%] my-3 p-[16px] bg-gradient-to-l from-blue-500 to-purple-500 text-5xl text-white w-fit">
              <FaBlog />
            </div>
              <h1 className="text-3xl font-semibold py-2">Blog Writing</h1>
              <p className="w-[350px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis dicta inventore quibusdam tenetur, odio odit nemo fuga magni alias quo, ipsam debitis corporis deleniti officiis ullam earum porro! Similique velit veritatis voluptatem aspernatur facilis nemo sequi perferendis itaque! Et?</p>
              <button className="my-5 cursor-pointer hover:bg-purple-900 rounded-md bg-purple-800 text-white text-xl py-2 px-5">
                Read More
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Animated_scroll.css";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="bg-[url('https://wallpapers.com/images/hd/light-color-background-vmkuihk29pi1xq65.jpg')] bg-cover bg-center md:pt-5 pt-16 px-5 pb-20">
        <h1 className="text-center text-red-600 lg:text-5xl text-3xl pt-5">
          My Projects
        </h1>
        <p className="text-center text-xl font-light pt-4">PROJECT BASED ON FRONTEND AND FULL STACK WEB DEVELOPMENT</p>
        <div id="project_scroll">
        <Carousel responsive={responsive} className=" rounded-xl p-2 mx-5 border-2 border-gray-300 my-5"  >
          <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center mx-3 md:mx-8 mt-3">
            <img src="public/Blog_img.png" className="p-1 rounded-xl h-64" alt="" />
            <h1 className="text-3xl font-semibold py-2">Blog Website</h1>
            <p className="p-2">
              This is a frontend clone of a blog website built using{" "}
              <strong>React and Tailwind CSS</strong>.The project ensuring a
              responsive and visually appealing user interface. With the power
              of React, it offers dynamic and seamless navigation, while
              Tailwind CSS enhances styling with utility-first classes.
            </p>
            <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
              <a href="https://github.com/amanprajapati3/web.git">Project Link</a>{" "}
            </button>
          </div>
          <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center mx-3 md:mx-8 mt-3">
            <img src="public/myntra_img.png" className="p-1 rounded-xl h-64" alt="" />
            <h1 className="text-3xl font-semibold py-2">Myntra Clone</h1>
            <p className="p-2">
              This is a frontend clone of a Myntra website built using{" "}
              <strong>React and Tailwind CSS</strong>.The project ensuring a
              responsive and visually appealing user interface. With the power
              of React, it offers dynamic and seamless navigation, while
              Tailwind CSS enhances styling with utility-first classes.
            </p>
            <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
              <a href="https://github.com/amanprajapati3/Myntr_clone.git">Project Link</a>{" "}
            </button>
          </div>
          <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center mx-3 md:mx-8 mt-3">
            <img src="public/jarvis_img.png" className="p-1 rounded-xl h-64 w-full" alt="" />
            <h1 className="text-3xl font-semibold py-2">AI Virtual Assistance</h1>
            <p className="p-2">
            I have developed an AI virtual assistant called <strong> Jarvis</strong> using <strong>HTML, CSS, and JavaScript</strong> . It simulates interactive conversations and performs various tasks based on user input. This project showcases my frontend skills and enhances user interaction with a smart, responsive interface.
            </p>
            <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
              <a href="https://github.com/amanprajapati3/AI_virtualclone.git">Project Link</a>{" "}
            </button>
          </div>
          <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center mx-3 md:mx-8 mt-3">
            <img src="public/full_stack_blog.png" className="p-1 rounded-xl h-64" alt="" />
            <h1 className="text-3xl font-semibold py-2">Full Stack Blog App</h1>
            <p className="p-2">
            I have developed a MERN stack blog application using the <strong>(MongoDB, Express.js, React, and Node.js)</strong> . This project features a seamless user experience with dynamic content management, authentication, and a responsive design. It showcases my skills in both frontend and backend development.
            </p>
            <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
              <a href="https://github.com/amanprajapati3/Full-stack-blog-app.git">Project Link</a>{" "}
            </button>
          </div>
          <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center mx-3 md:mx-8 mt-3">
            <center>
            <img src="public/calculator_img.png" className="p-1 rounded-xl h-64" alt="" />
            </center>
            <h1 className="text-3xl font-semibold py-2">Calculator</h1>
            <p className="p-2">
            I have built a fully functional <strong>calculator</strong> using <strong>HTML, CSS, and JavaScript</strong> . It features a user-friendly interface with essential arithmetic operations and real-time calculations. This project enhances my frontend development skills and demonstrates interactive UI design.
            </p>
            <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
              <a href="https://github.com/amanprajapati3/Calculator.git">Project Link</a>{" "}
            </button>
          </div>
          <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center mx-3 md:mx-8 mt-3">
            <img src="public/todo_img.png" className="p-1 rounded-xl h-64" alt="" />
            <h1 className="text-3xl font-semibold py-2">ToDo List</h1>
            <p className="p-2">
            I have built a fully functional <strong>To Do List</strong> using <strong>HTML, CSS, and JavaScript</strong> . It features a user-friendly interface with essential arithmetic operations and real-time calculations. This project enhances my frontend development skills and demonstrates interactive UI design..
            </p>
            <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
              <a href="">Project Link</a>{" "}
            </button>
          </div>
        </Carousel>
        </div>
      </div>
    </>
  );
};

export default Projects;

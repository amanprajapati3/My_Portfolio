import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Animated_scroll.css";

const Blog = () => {

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
           <h1 className="text-center text-red-600 lg:text-3xl text-2xl pt-5">
             My Blogs
           </h1>
           <p className="text-center font-light pt-4">LATEST NEWS AND POSTS</p>
           <div id="project_scroll">
           <Carousel responsive={responsive} className=" rounded-xl my-5"  >
             <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center md:mx-8">
              <center>
               <img src="https://miro.medium.com/v2/resize:fit:736/1*XtwAzX--e6O0uFFooMbomg.jpeg" className=" rounded-t-xl h-64 w-full" alt="" />
               </center>
               <h1 className="text-xl font-semibold py-2">The Rise of AI</h1>
               <div className="flex justify-center gap-2 lg:gap-5 my-2">
                <p className="">Posted By :- <strong className="text-[16px]">Aman </strong></p>
                <p className="">date :- <strong className="text-[16px]">23/4/2024</strong> </p>
               </div>
               <p className="p-2 text-sm">
               Artificial Intelligence is revolutionizing industries like healthcare, finance, and automation. From self-driving cars to smart assistants.
               </p>
               <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
                 <a href="#">Read More</a>{" "}
               </button>
             </div>
             <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center md:mx-8">
              <center>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0kgNjN559sP3oxlb_no9FH3iewwLEUA4LA&s" className=" rounded-t-xl h-64 w-full" alt="" />
               </center>
               <h1 className="text-xl font-semibold py-2">AI in Web Development</h1>
               <div className="flex justify-center gap-2 lg:gap-5 my-2">
                <p className="">Posted By :- <strong className="text-[16px]">Aman </strong></p>
                <p className="">date :- <strong className="text-[16px]">23/4/2024</strong> </p>
               </div>
               <p className="p-2 text-sm">
               AI-powered tools are enhancing web development by automating design, content generation, and user interactions.
               </p>
               <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
                 <a href="#">Read More</a>{" "}
               </button>
             </div>
             <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center md:mx-8">
               <img src="https://digitalmarketingstream.com/wp-content/uploads/2020/01/AdobeStock_268096090-1080x675.webp" className=" rounded-t-xl h-64 w-full" alt="" />
               <h1 className="text-xl font-semibold py-2">AI-Powered Chatbots</h1>
               <div className="flex justify-center gap-2 lg:gap-5 my-2">
                <p className="">Posted By :- <strong className="text-[16px]">Aman </strong></p>
                <p className="">date :- <strong className="text-[16px]">23/4/2024</strong> </p>
               </div>
               <p className="p-2 text-sm">
               Chatbots are changing how businesses interact with customers by providing instant, automated support. 
               </p>
               <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
                 <a href="#">Read More</a>{" "}
               </button>
             </div>
             <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center md:mx-8">
               <img src="https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack-1.png" className="rounded-t-xl h-64" alt="" />
               <h1 className="text-xl font-semibold py-2">The MERN Stack Explained</h1>
               <div className="flex justify-center gap-2 lg:gap-5 my-2">
                <p className="">Posted By :- <strong className="text-[16px]">Aman </strong></p>
                <p className="">date :- <strong className="text-[16px]">23/4/2024</strong> </p>
               </div>
               <p className="p-2 text-sm">
               The MERN stack (MongoDB, Express.js, React, and Node.js) is a powerful technology stack for building dynamic web applications.
               </p>
               <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
                 <a href="#">Read More</a>{" "}
               </button>
             </div>
             <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center md:mx-8">
               <center>
               <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200504230050/7-Tips-For-Performances-Optimization-in-Web-Development.png" className=" rounded-t-xl h-64" alt="" />
               </center>
               <h1 className="text-xl font-semibold py-2">Optimizing Website Performance</h1>
               <div className="flex justify-center gap-2 lg:gap-5 my-2">
                <p className="">Posted By :- <strong className="text-[16px]">Aman </strong></p>
                <p className="">date :- <strong className="text-[16px]">23/4/2024</strong> </p>
               </div>
               <p className="p-2 text-sm">
               A slow website can hurt user experience and search engine rankings. Optimizing images, reducing HTTP requests.
               </p>
               <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
                 <a href="#">Read More</a>{" "}
               </button>
             </div>
             <div className="bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-200 text-center md:mx-8">
               <img src="https://miro.medium.com/v2/resize:fit:845/1*SHoWzG12JYKag0TU6wEdIQ.png" className="rounded-t-xl h-64" alt="" />
               <h1 className="text-xl font-semibold py-2">React Best Practices</h1>
               <div className="flex justify-center gap-2 lg:gap-5 my-2">
                <p className="">Posted By :- <strong className="text-[16px]">Aman </strong></p>
                <p className="">date :- <strong className="text-[16px]">23/4/2024</strong> </p>
               </div>
               <p className="p-2 text-sm">
               Writing clean React code is crucial for maintainability and scalability. Using reusable components, managing state effectively.
               </p>
               <button className="my-3 py-1 px-5 text-xl bg-green-600 hover:bg-green-900 rounded-xl text-white">
                 <a href="">Project Link</a>{" "}
               </button>
             </div>
           </Carousel>
           </div>
         </div>
   </>
  )
}

export default Blog
import "./Animated_scroll.css";

const About = () => {
  return (
    <>
      <div  className="bg-[url('https://wallpapers.com/images/hd/light-color-background-vmkuihk29pi1xq65.jpg')] bg-cover bg-center md:pt-5 pt-16 px-5 pb-20">
      <h1 className="md:text-3xl text-2xl font-bold text-center">ABOUT ME</h1>
      
      <div className="flex flex-wrap items-center justify-center gap-10 pt-10">
        {/* Profile Image */}
        <div className="flex justify-center" id="slide_from_left">
          <div className="rounded-full p-[7px] bg-gradient-to-r from-blue-500 to-purple-500">
            <img
              src="/Person_img.webp" // Ensure this is inside `public/` or use an `import`
              alt="Aman Prajapati"
              className="lg:w-[300px] w-[250px] shadow-2xl shadow-gray-900 rounded-full"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="max-w-2xl" id="project_scroll">
          <h1 className="lg:text-3xl text-2xl font-sans text-center lg:text-left">
            Hello! My Name is <span className="font-bold">Aman Prajapati</span>
          </h1>
          <p className="mt-4 text-sm text-center lg:text-left text-gray-800 leading-relaxed">
            Hi! I’m Aman Prajapati, a passionate frontend developer with a
            strong foundation in modern web technologies. I specialize in
            <strong> HTML, CSS, JavaScript, and React</strong>, crafting sleek, responsive, and
            user-friendly interfaces. Currently, I’m expanding my skills in
            backend development, learning <strong>Node.js, Express.js, and MongoDB</strong> to
            become a full-stack developer.
            <br /> <br />
            Beyond web development, I have experience in <strong>C and C++</strong>, which has
            strengthened my problem-solving abilities and logical thinking. I love
            building dynamic applications, exploring new technologies, and
            constantly challenging myself to improve.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;

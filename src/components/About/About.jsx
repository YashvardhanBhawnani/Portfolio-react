import { Typewriter, Cursor } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImg from "../../images/yash_img_hero.png";
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[8vw] font-sans mt-10 md:mt-24 lg:mt-22 "
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hi I Am
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Yashvardhan Bhawnani
          </h2>
          {/* Skills Heading With typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Frontend Developer",
                "React.js Developer",
                "Software Developer",
                "Coder",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              cursorColor="#8245ec"
              typeSpeed={150}
              deleteSpeed={55}
              delaySpeed={1000}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-md text-gray-500 mb-8 mt-5 leading-relaxed">
            Aspiring full-stack developer with a strong foundation in front-end
            development and growing expertise in the MERN stack. Skilled in
            HTML, CSS, JavaScript, and React.js, I am passionate about building
            responsive, user-friendly web applications while continuously
            expanding my backend and problem-solving skills.
          </p>
          {/* resume btn */}
          <a
            href="https://drive.google.com/file/d/1D3T-WtH28td29mze45wHl0Kps6YuZp7w/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-8  mb-4 rounded-full font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download CV
          </a>
        </div>
        {/* Right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className=" relative -mt-4 md:-mt-12 w-48 h-48 sm:w-64 sm:h-64 md:w-100 md:h-100 border-6 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImg}
              alt="hero-img"
              className="w-full h-full mr-10 rounded-full object-cover object-top drop-shadow-[0_10px_20px_rgba(130,69,236,0.5) ]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
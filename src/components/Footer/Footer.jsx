import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (secId) => {
    const sec = document.getElementById(secId);
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* name */}
        <h2 className="text-xl lg:text-2xl  text-purple-400 capitalize">
          yashvardhan bhawnani
        </h2>
        {/* nav links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* social media icons */}
        <div className="flex flex-wrap justify-center space-x-6 mt-6">
          {[
            { icon: <FaTwitter />, link: "https://x.com/RenderingIdeas3" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/yashvardhan-bhawnani-41705a24b/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/simply.yash18/",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="text-sm capitalize">
          {/* quote */}
          <p className="mt-4 mb-2 italic text-gray-200">
            "The only time you truly fail, is when you decide to give up"
          </p>
          {/* Copyright Text */}
          <p className="lg:text-md text-gray-400 mt-6">
            © 2026 yashvardhan bhawnani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

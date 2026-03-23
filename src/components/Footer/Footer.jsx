import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (secId) => {
    const sec = document.getElementById(secId);
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-foreground py-5 px-[12vw] md:px-[7vw] lg:px-[20vw] -mt-6 lg:mt-0">
      <div className="container mx-auto text-center">
        {/* name */}
        <h2 className="text-xl font-semibold font-sans lg:text-3xl  text-foreground capitalize">
          yashvardhan bhawnani
        </h2>
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
              className="text-xl md:text-2xl font-semibold hover:text-primary transition-transform transform hover:scale-110 lg:mt-1"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="text-sm capitalize ">
          {/* quote */}
          <p className="mt-8 mb-2 italic text-primary md:text-lg font-sans">
            "The only time you truly fail, is when you decide to give up"
          </p>
          {/* Copyright Text */}
          <p className="lg:text-base text-foreground/80 mt-6 font-sans" >
            © 2026 yashvardhan bhawnani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FiMenu, FiX } from "react-icons/fi";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSec, setActiveSec] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (secId) => {
    setActiveSec(secId);
    setIsOpen(false);

    const section = document.getElementById(secId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[14vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="text-white py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-md lg:text-lg cursor-pointer ">
          <span className="text-muted">&lt;</span>
          <span className="text-primary font-sans">Yashvardhan</span>
          <span className="text-foreground text-xl"> / </span>
          <span className="text-primary font-sans">Bhawnani</span>
          <span className="text-muted">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-foreground font-sans">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-muted text-md ${activeSec === item.id ? "text-muted" : ""}`}
            >
              <button
                className="cursor-pointer"
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4 text-foreground">
          <a
            href="https://github.com/YashvardhanBhawnani"
            target="_blank"
            rel="noopener noreffer"
            className="hover:text-muted"
          >
            <FaGithubSquare size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/yashvardhan-bhawnani-41705a24b/"
            target="_blank"
            rel="noopener noreffer"
            className="hover:text-muted"
          >
            <FaLinkedinIn size={28} />
          </a>
        </div>

        {/* Mobile Menu Icons */}
        <div className="md:hidden font-sans">
          {isOpen ? (
            <FiX
              className="text-3xl text-primary cursor-pointer "
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl mt-1 text-primary cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5  bg-[#050414]/30 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-foreground">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer font-sans hover:text-foreground ${activeSec === item.id ? "text-muted" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 ">
              <a
                href="https://github.com/YashvardhanBhawnani"
                target="_blank"
                rel="noopener noreffer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithubSquare size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/yashvardhan-bhawnani-41705a24b/"
                target="_blank"
                rel="noopener noreffer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedinIn size={28} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

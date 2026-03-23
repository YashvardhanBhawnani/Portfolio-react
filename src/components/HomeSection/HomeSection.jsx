import heroBg from "../../images/hero-bg.jpg";
import yashHeroImg from "../../images/yashimghero.png";
import Button from "../Button";
import { GoArrowUpRight } from "react-icons/go";
import Tilt from "react-parallax-tilt";
import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimatedBorderButton } from "../AnimatedBorderButton";

const HeroSection = () => {
  return (
    <section>
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl leading-tight animate-fade-in animation-delay-100 font-sans">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-sans italic font-normal text-white">
                  precision.
                </span>
              </h2>
              <p className="text-base lg:text-lg font-sans text-foreground/90 md:text-foreground font-normal md:font-medium max-w-xl  animate-fade-in animation-delay-200 mt-8">
                Hi, I’m Yashvardhan Bhawnani — a frontend-focused developer
                specializing in React.js and modern JavaScript. I build
                responsive, user-friendly web applications and am expanding into
                full-stack development with the MERN stack to create scalable,
                end-to-end solutions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact" className="mt-2">
                <Button size="lg">
                  Contact Me{" "}
                  <GoArrowUpRight className="w-5 h-5 md:w-7 md:h-7" />
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1wxP_YnD9G-68p6v57-R1YnNznTJDi56r/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <AnimatedBorderButton>
                  <FaCloudDownloadAlt className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <Tilt>
            <div className="relative animate-fade-in animation-delay-300">
              {/* Profile Image */}
              <div className="relative max-w-md mx-auto">
                <div
                  className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
                />
                <div className="relative rounded-full p-2 glow-border border-muted border-2 -mt-6 lg:-mt-8 lg:w-md lg:h-md">
                  <img
                    src={yashHeroImg}
                    alt="yashvardhan bhawnani"
                    className="w-full h-full aspect-square object-cover object-top rounded-full"
                  />
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

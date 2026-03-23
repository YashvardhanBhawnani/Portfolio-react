import { SkillsInfo } from "../../constant.js";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      className="py-15 pb-20 px-[12vw] md:px-[16vw] font-sans"
      id="skills"
    >
      {/* Section Title */}
      <div className="text-center mb-16 -mt-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-foreground  uppercase">
          Skills
        </h2>
        <div className="w-18 lg:w-26 h-1 bg-muted mx-auto mt-2"></div>
        <p className="text-foreground/50 text-sm md:text-lg md:text-foreground/65 md:font-light mt-5 capitalize animate-fade-in animation-delay-200">
          A collection of my technical skills and expertise honed through
          various projects and experiences.
        </p>
      </div>

      {/* skills categories */}
      <div className="flex flex-wrap gap-4 lg:gap-5 py-3 justify-evenly">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-surface/50 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-7 mb-3 w-full sm:w-[48%] rounded-xl border border-muted/60 
          shadow-[0_0_20px_1px_bg-foreground]"
          >
            <h3 className="text-xl md:text-3xl -mt-2.5 text-primary mb-7 text-center">
              {category.title}
            </h3>

            {/* skills items */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-1 bg-transparent border border-muted rounded-full py-1 px-4 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-sm text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

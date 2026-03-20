import { SkillsInfo } from "../../constant.js";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      className="py-15 pb-20 px-[12vw] md:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
      id="skills"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-white uppercase">
          Skills
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-3 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* skills categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-6 justify-evenly">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-grey-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-7 mb-3 w-full sm:w-[48%] rounded-xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl md:-mt-2.5 font-semibold text-gray-400 mb-7 text-center">
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
                    className="flex items-center justify-center space-x-2 bg-transparent border border-gray-700 rounded-3xl py-2 px-2 sm:py-1.5 sm:px-2 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-[12px] text-gray-300">
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

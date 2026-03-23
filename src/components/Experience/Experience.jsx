import { experiences } from "../../constant";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[14vw] font-sans"
    >
      {/* section title */}
      <div className="text-center mb-16 -mt-16">
        <h2 className="text-foreground uppercase text-2xl md:text-4xl font-semibold">
          experience
        </h2>
        <div className="w-32 h-1 lg:w-48 bg-muted mx-auto mt-3"></div>
        <p className="text-foreground/50 text-sm md:text-lg md:text-foreground/65 md:font-light mt-5 capitalize animate-fade-in animation-delay-200">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* experience timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-muted h-full"></div>
        {/* experience entries */}
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
          >
            {/* content section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-foreground bg-surface/50 backdrop-blur-md ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-foreground rounded-md overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-2xl font-semibold text-muted">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm md:text-base mt-2 lg:mt-0 text-foreground">
                      {exp.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm md:text-base text-primary mt-2">{exp.date}</p>
                </div>
              </div>
              <p className="mt-4 text-foreground/70 md:text-foreground text-sm md:text-base font-normal">
                {exp.desc}
              </p>
              <div className="mt-4">
                <h4 className="font-medium text-muted/85 md:text-xl md:font-semibold">Skills : </h4>
                <ul className="flex flex-wrap mt-2">
                  {exp.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-surface/50 text-foreground/85 px-4 py-1.5 text-sm md:text-base md:font-normal rounded-lg mr-2 mb-2 border border-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

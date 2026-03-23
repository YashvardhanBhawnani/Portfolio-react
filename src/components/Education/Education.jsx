import { education } from "../../constant";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[14vw] font-sans"
    >
      {/* section title */}
      <div className="text-center mb-16 -mt-20 md:-mt-12">
        <h2 className="text-2xl lg:text-4xl font-semibold text-foreground uppercase">
          education
        </h2>
        <div className="w-34 lg:w-50 h-1 bg-muted mx-auto mt-4"></div>
        <p className="text-foreground/50 text-base font-extralight md:text-lg md:font-light mt-5 capitalize animate-fade-in animation-delay-200">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* education timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-muted h-full"></div>
        {/* education entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
          >
            {/* content section */}
            <div
              className={`w-full max-w-sm sm:max-w-md p-4 sm:p-8 rounded-2xl border border-foreground bg-surface/50 backdrop-blur-md ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* school/college logo */}
                <div className="w-54 lg:w-56 h-full rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-xl font-semibold text-muted">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm md:text-base mt-2 lg:mt-2 text-foreground">
                      {edu.school}
                    </h4>
                  </div>

                  {/* Date*/}
                  <p className="text-sm md:text-base text-primary mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted md:text-lg">
                Grade : {edu.grade}
              </p>
              <p className="mt-4 text-foreground/60 md:text-foreground text-sm md:text-base font-normal">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

import { education } from "../../constant";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase">education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-500 mt-4 text-lg font-semibold capitalize">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* education timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>
        {/* education entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
          >
            {/* content section */}
            <div
              className={`w-full sm:max-w-lg p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* school/college logo */}
                <div className="w-60 h-full rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl sm:font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300 mt-2">
                      {edu.school}
                    </h4>
                  </div>

                  {/* Date*/}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 font-semibold">
                Grade : {edu.grade}
              </p>
              <p className="mt-4 text-base sm:text-md text-gray-400">
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

import { useState } from "react";
import { projects } from "../../constant";

const Projects = () => {
  const [selectProj, setSelectedProj] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProj(project);
  };

  const handleCloseModal = (project) => {
    setSelectedProj(null);
  };

  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* section title */}
      <div className="text-center mb-19 -mt-10">
        <h2 className="text-4xl font-bold text-white uppercase">Projects</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-6 text-lg">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* project grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            onClick={() => handleOpenModal(project)}
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-xl object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 lg:text-gray-500 mb-4 pt-2 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-[#251f38] text-sm text-purple-400 rounded-full px-3 py-1 mr-2 mb-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* modal container   */}
      {selectProj && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectProj.image}
                  alt={selectProj.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="text-lg lg:text-3xl font-semibold text-white mb-3 text-md">
                  {selectProj.title}
                </h3>
                <p className="text-gray-500 mb-6 lg:text-base text-sm">
                  {selectProj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectProj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#251f38] text-sm text-purple-400 rounded-full px-3 py-1 lg:px-3 lg:py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectProj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-64 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-lg text-sm lg:font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectProj.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-64 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-lg text-sm text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

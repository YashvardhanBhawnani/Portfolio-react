import { SiGithub } from "react-icons/si";
import { MdOutlineComputer } from "react-icons/md";
import { projects } from "../../constant";


const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-border rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-4xl mb-16 -mt-32 -md:mt-20">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground font-sans uppercase animate-fade-in">
            Featured Work
          </h2>
          <div className="w-44 md:w-64 lg:w-76 h-1 bg-muted mx-auto m-4"></div>
          <h2 className="font-sans text-2xl md:text-5xl md:font-normal mt-8 mb-6 animate-fade-in animation-delay-100 text-foreground">
            Projects that
            <span className="font-sans italic font-xs font-medium lg:font-extralight text-muted">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-foreground/50 text-sm md:text-lg md:text-foreground/65 md:font-light mt-5 capitalize font-sans animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass transition-all  hover:text-primary"
                    target="_blank"
                  >
                    <SiGithub className="w-5 h-5" size={28} />
                  </a>
                  <a
                    href={project.webapp}
                     target="_blank"
                    className="p-3 rounded-full glass hover:bg-card transition-all hover:text-primary"
                  >
                    <MdOutlineComputer size={22} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors font-sans">
                    {project.title}
                  </h3>
                </div>
                <p className=" text-sm font-medium md:text-base text-foreground/45 md:text-foreground/50 font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1 rounded-full bg-surface/80 text-xs font-normal md:text-base border border-muted/60 text-muted hover:border-primary/50 transition-all duration-300 font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

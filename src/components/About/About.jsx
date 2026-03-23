import { highlights } from "../../constant";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 relative z-10">
        {/* section title */}
        <div className="text-center mb-16 -mt-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-foreground uppercase">
          about me
        </h2>
        <div className="w-30 lg:w-46 h-1 bg-muted mx-auto mt-4"></div>
        <p className="text-foreground/50 text-sm md:text-lg md:text-foreground/65 md:font-light mt-5 capitalize animate-fade-in animation-delay-200">
         My journey in tech is driven by continuous learning and hands-on development. Here’s a quick look at my progress so far.
        </p>
      </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className=" space-y-5 md:space-y-8 -mt-8 md:mt-0">
            <div className="animate-fade-in">
            </div>
            <h2 className="text-2xl md:text-4xl animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-sans italic font-normal leading-tight text-muted">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-6 text-sm md:space-y-5 lg:text-base text-foreground/60 lg:text-foreground/90 animate-fade-in animation-delay-200 leading-normal lg:leading-relaxed">
              <p>
                I’m a passionate frontend-focused developer, building modern web applications with React.js and JavaScript. My journey started with curiosity about how the web works, and it’s now evolving into hands-on experience with real-world projects and growing expertise in full-stack development using the MERN stack.
              </p>
              <p>
                I specialize in React.js and modern JavaScript, building responsive web apps from clean UI to dynamic interfaces. I focus on writing efficient code while creating smooth, user-friendly experiences.
              </p>
              <p>
               When I’m not coding, you’ll find me exploring new technologies, learning and building projects, reading books, listening to music, and growing as a developer.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-4 lg:p-8 rounded-2xl animate-fade-in w-full"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base lg:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground/70 md:text-muted-foreground/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

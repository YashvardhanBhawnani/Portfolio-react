import { useState } from "react";
import Button from "../Button";
import { LuSend } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoAlertCircleOutline } from "react-icons/io5";
import { contactInfo } from "../../constant";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setSubmitStatus({ type: null, message: "" });
    }, 5000);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          userName: formData.name,
          userEmail: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="-mt-40 py-32 relative overflow-hidden font-sans"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground uppercase">
            Get In Touch
          </h2>
          <div className="w-30 lg:w-56 h-1 bg-muted mx-auto mt-4"></div>
          <h2 className="font-sans text-2xl md:text-5xl md:font-normal mt-8 mb-6 animate-fade-in animation-delay-100 text-foreground">
            Let's build{" "}
            <span className="font-sans italic font-xs font-normal lg:font-extralight text-muted">
              something great.
            </span>
          </h2>
          <p className="text-foreground/50 text-sm md:text-lg md:text-foreground/65 md:font-light mt-5 capitalize animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-2xl lg:max-w-5xl mx-auto">
          <div className="glass p-4 md:p-8 rounded-3xl border-2 border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-base md:text-lg font-medium -mt-1 mb-2 text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-2 py-1.5 lg:px-3 lg:py-3 bg-surface/50 rounded-xl border border-border focus:border-muted focus:ring-0 focus:ring-primary outline-none transition-all text-sm md:text-base" 
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  type="email"
                  className="block text-base md:text-lg font-medium text-foreground -mt-1 mb-2 "
                >
                  Email
                </label>
                <input
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-2 py-1.5 lg:px-3 lg:py-3 bg-surface/50 rounded-xl border border-border focus:border-primary focus:ring-0 focus:ring-primary outline-none transition-all text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base md:text-lg font-medium mb-2 text-foreground"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-2 py-2 lg:px-3 lg:py-3 bg-surface/50 rounded-xl border border-border focus:border-primary focus:ring-0 focus:ring-primary outline-none transition-all resize-none text-sm md:text-base"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <LuSend className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <FaRegCircleCheck className="w-5 h-5 shrink-0" />
                  ) : (
                    <IoAlertCircleOutline className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400 ">
            <div className="glass rounded-3xl p-4 sm:p-8 border-surface/50">
              <h3 className="text-xl font-semibold mt-2 mb-6 lg:-mt-4 lg:-ml-3">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex flex-col items-start -ml-4 sm:flex-row sm:items-center gap-4 p-4 rounded-2xl hover:bg-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 lg:w-14 lg:h-12 shrink-0 rounded-xl bg-card/80 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-6 h-6 text-muted lg:w-7 lg:h-7 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="min-w-0 w-full">
                      <div className="text-base md:text-base text-muted">{item.label}:</div>
                      <div className="font-medium text-foreground/70 break-all sm:break-normal sm:whitespace-normal text-sm md:text-base mt-1">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-lg lg:text-xl text-primary">
                  Currently Available
                </span>
              </div>
              <p className="text-foreground/50 text-base">
                I’m currently seeking entry-level opportunities and real-world
                projects. Whether it’s a full-time role, internship, or
                freelance work, I’m eager to learn, contribute, and grow—let’s
                connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0yuq4wl",
        "template_m462pum",
        form.current,
        "-OQ3QE2Y2O9u6j_PA",
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
      );
  };

  return (
    <section className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      {/* Toast Container */}
      <ToastContainer />
      {/* section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase">contact</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* contact form */}
      <div className="mt-4 w-full max-w-lg bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className=" text-xl lg:text-3xl text-white text-center">
          Connect With Me
        </h3>
        <form
          className="mt-4 flex flex-col space-y-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="userEmail"
            placeholder="Your Email Id"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="userName"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          ></textarea>
          {/* send btn   */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-500 py-2 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

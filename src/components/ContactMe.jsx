import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import EmailPic from "../assets/mail.png";

function ContactMe() {
  //Framer project
  const projectRef = useRef(null);

  //Framer project check if it is in view
  const isInViewProject = useInView(projectRef, { once: true });

  return (
    <div className="container  w-full h-fit gap-7 mt-24 2xl:mt-56 xl:mt-56 lg:mt-44 md:mt-32 sm:mt-24">
      <div
        className="font-for-intro mb-5 2xl:mb-10 lg:mb-10 md:mb-10 sm:mb-10"
        ref={projectRef}
        style={{
          transform: isInViewProject ? "none" : "translateX(-100px)",
          opacity: isInViewProject ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        Contact Me
      </div>

      <div className="Container-cont text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm">
        <div className="box-one-cont w-max mb-10 xl:mb-0 ">
          <div className="mb-3 xl:mb-2">Get in Touch</div>
          <div className="mb-3 xl:mb-2">
            Fill in the form to start a conversation
          </div>
          <div>
            <div className="container-below mb-0">
              <img className="h-5 w-5" src={EmailPic} />
              <span>jcampos0935@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="box-two-cont h-max w-max m-0 ">
          <div>
            Full name
            <input
              type="text"
              placeholder="Your Full Name"
              className="input  input-bordered w-full max-w-xs mt-2 text-sm 2xl:text-lg xl:text-lg lg:text-lg sm:text-sm"
              disabled
            />
          </div>
          <div className="mt-5">
            Email Address
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs mt-2 text-sm 2xl:text-lg xl:text-lg lg:text-lg sm:text-sm"
              disabled
            />
          </div>
          <div className="mt-5">
            Message
            <textarea
              className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-2 text-sm 2xl:text-lg xl:text-lg lg:text-lg sm:text-sm"
              placeholder="Your Message "
              disabled
            ></textarea>
          </div>

          <button className="btn btn-outline btn-error mt-5 w-full max-w-xs">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

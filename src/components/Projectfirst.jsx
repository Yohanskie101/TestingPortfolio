import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { gsap } from "gsap";
import FirstProjectImg from "../assets/pj4-img.png";
import lng1 from "../assets/php.png";
import lng2 from "../assets/html-5.png";
import lng3 from "../assets/css-3.png";
import lng4 from "../assets/js.png";
import lng5 from "../assets/blender.png";
import lng6 from "../assets/threejs.png";
import lng7 from "../assets/bootstrap.png";

function Projectfirst() {
  //Framer project
  const projectRef = useRef(null);

  //Gsap Title Project
  const titleRef1 = useRef(null);

  //Framer project check if it is in view
  const isInViewProject = useInView(projectRef, { once: true });

  //Gsap Title Prrroject check if it is in view
  const isInViewTitle1 = useInView(titleRef1, { once: true });

  //Gsap Who is Yohan
  useEffect(() => {
    if (isInViewTitle1) {
      new SplitType("#my-title1", { types: "chars" });

      gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.0,
        duration: 0.1,
      });
    }
  }, [isInViewTitle1]);

  return (
    <>
      <div
        className="Title-Project heading-project text-base xl:text-4xl lg:text-3xl sm:text-2xl leading-relaxed"
        id="my-title1"
        ref={titleRef1}
        style={{
          transform: isInViewTitle1 ? "none" : "translateY(0px)",
          opacity: isInViewTitle1 ? 1 : 0,
          transition: "all 0.1s ease 0.0s",
        }}
      >
        ITrak
      </div>

      <div className="flex justify-between mb-5">
        <div
          className="sub-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl lg:text-2xl"
          ref={projectRef}
          style={{
            transform: isInViewProject ? "none" : "translateY(0px)",
            opacity: isInViewProject ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        >
          Tracking Management System
        </div>
        <div
          className="read-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl cursor-pointer"
          onClick={() => document.getElementById("my_modal_1").showModal()}
          ref={projectRef}
          style={{
            transform: isInViewProject ? "none" : "translateX(0px)",
            opacity: isInViewProject ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        >
          Read the full details
        </div>
      </div>

      <div
        className="Project-img-cont w-full mb-5 h-1/2"
        ref={projectRef}
        style={{
          transform: isInViewProject ? "none" : "translateY(70px)",
          opacity: isInViewProject ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <img
          className="w-full h-full"
          src={FirstProjectImg}
          onClick={() => document.getElementById("my_modal_1").showModal()}
        />
      </div>

      {/* new div */}
      <div className="grid grid-cols-2 justify-items-center">
        <div className="text-xs sm:text-lg md:text-xl 2xl:text-2xl">
          <p className="sub-heading-project">Role</p>
          <p className="read-heading-project">Lead Programmer</p>
        </div>

        <div className="text-xs sm:text-lg md:text-xl 2xl:text-2xl">
          <p className="sub-heading-project">Years</p>
          <p className="read-heading-project  ">2023-2024</p>
        </div>
      </div>
      {/* end of new div */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <h3 className="font-bold text-2xl ">ITrak</h3>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="img-cont-modal py-4 ">
            <img className="img-modal w-full h-full" src={FirstProjectImg} />
          </div>

          <p className="py-4">
            iTrak is a comprehensive system designed to streamline asset
            monitoring and staff management for Quezon City University's
            Physical Facilities and General Services Division. Combining 2D and
            3D maps with RFID and GPS technology, this web-based solution
            enhances maintenance efficiency, facilitates real-time reporting,
            and ensures precise attendance tracking. The system's user-friendly
            interface and smart features optimize facility operations and
            improve overall productivity.
          </p>
          <div className="py-2 flex gap-3">
            <img className="w-6 h-6" src={lng1} />
            <img className="w-7 h-6" src={lng7} />
            <img className="w-6 h-6" src={lng4} />
            <img className="w-7 h-6" src={lng5} />
            <img className="w-6 h-6" src={lng6} />
          </div>
          <p className="py-1 font-bold text-lg">Features:</p>
          <p className="py-2">
            1. 2D and 3D Building Maps: Provides detailed visualization of
            university buildings and equipment.<br></br> 2. Real-Time Equipment
            Status Reporting: Allows maintenance personnel to submit and access
            reports instantly.<br></br> 3. RFID-Based Attendance Monitoring:
            Tracks staff attendance through RFID technology.<br></br> 4. GPS
            Tracking: Monitors the location of maintenance personnel during
            their rounds.<br></br> 5. User Access Levels: Defines three user
            roles with varying access rights—Administrator, Maintenance Manager,
            and Maintenance Personnel.<br></br> 6. Dashboard Analytics: Displays
            charts and analytics for monitoring overall system performance.{" "}
            <br></br>7. Task Assignment: Assigns specific maintenance tasks to
            personnel for efficient handling of equipment issues.<br></br> 8.
            Archive and Unarchive Features: Stores and restores data as needed.
            <br></br> 9. Action Logging: Records actions performed within the
            system for enhanced monitoring. <br></br>10. Mobile Compatibility:
            Ensures the system is accessible on mobile devices for on-the-go
            functionality.
          </p>
          <div className="container-btn-footer py-4">
            <button className="btn-modal-footer btn btn-outline">
              Live Preview
            </button>
            <button
              className="btn-modal-footer  btn btn-outline"
              onClick={() =>
                window.open("https://github.com/Yohanskie101/iTrak", "_blank")
              }
            >
              Source Files
            </button>
          </div>
          {/* <div className="modal-action"></div> */}
        </div>
      </dialog>
    </>
  );
}

export default Projectfirst;

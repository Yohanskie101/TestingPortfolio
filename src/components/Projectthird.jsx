import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { gsap } from "gsap";
import ThirdProjectImg from "../assets/pj1-img.png";
import lng1 from "../assets/vbnet.png";
import lng7 from "../assets/microsoftaccess.png";

function Projectthird() {
  //Framer project
  const projectRef = useRef(null);

  //Framer project
  const isInViewProject = useInView(projectRef, { once: true });

  //Gsap Title Project
  const titleRef3 = useRef(null);

  //Gsap Title Prrroject check if it is in view
  const isInViewTitle3 = useInView(titleRef3, { once: true });

  //Gsap Who is Yohan
  useEffect(() => {
    if (isInViewTitle3) {
      new SplitType("#my-title3", { types: "chars" });

      gsap.to(".char", {
        y: 0,
        stagger: 0.02,
        delay: 0.0,
        duration: 0.01,
      });
    }
  }, [isInViewTitle3]);
  return (
    <>
      <div
        className="Title-Project heading-project text-base xl:text-4xl lg:text-3xl sm:text-2xl leading-relaxed"
        id="my-title3"
        ref={titleRef3}
        style={{
          transform: isInViewTitle3 ? "none" : "translateY(0px)",
          opacity: isInViewTitle3 ? 1 : 0,
          transition: "all 0.01s ease 0.0s",
        }}
      >
        Pic-A-Book
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
          Library Management System
        </div>
        <div
          className="read-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl cursor-pointer"
          onClick={() => document.getElementById("my_modal_3").showModal()}
          ref={projectRef}
          style={{
            transform: isInViewProject ? "none" : "translateY(0px)",
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
          src={ThirdProjectImg}
          onClick={() => document.getElementById("my_modal_3").showModal()}
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
          <p className="read-heading-project  ">2022-2022</p>
        </div>
      </div>
      {/* end of new div */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <h3 className="font-bold text-2xl ">Pic-A-Book</h3>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="img-cont-modal py-4 ">
            <img className="img-modal w-full h-full" src={ThirdProjectImg} />
          </div>

          <p className="py-4">
            Pic-A-Book, developed using VB.net and Microsoft Access, streamlines
            all library operations for school libraries. It features
            user-friendly interfaces for managing books, tracking borrow and
            return transactions, and calculating overdue penalties
            automatically. The system ensures secure data storage and generates
            detailed reports for efficient library management.
          </p>
          <div className="py-2 flex gap-3">
            <img className="w-6 h-6" src={lng1} />
            <img className="w-7 h-6" src={lng7} />
          </div>
          <p className="py-1 font-bold text-lg">Features:</p>
          <p className="py-2">
            1. Book Management: Add, retrieve, update, and delete book records.
            <br></br>
            2. Borrower Records: Maintain and view data on all borrowers.{" "}
            <br></br> 3. Transaction Tracking: Monitor book borrowing, returns,
            and overdue fee payments. <br></br>4. User Management: Add,
            retrieve, update, and delete user records. <br></br> 5.
            Comprehensive Book List: Store and manage the book list and total
            number of books. <br></br>6. Automated Penalty Calculation:
            Calculate and track penalties for late returns. <br></br>7. Login
            System: Authenticate users with roles as administrators (librarians)
            and borrowers.
          </p>
          <div className="container-btn-footer py-4">
            <button className="btn-modal-footer btn btn-outline">
              Live Preview
            </button>
            <button
              className="btn-modal-footer  btn btn-outline"
              onClick={() =>
                window.open(
                  "https://github.com/Yohanskie101/LibrarySystem",
                  "_blank"
                )
              }
            >
              Source Files
            </button>
          </div>
          <div className="modal-action"></div>
        </div>
      </dialog>
    </>
  );
}

export default Projectthird;

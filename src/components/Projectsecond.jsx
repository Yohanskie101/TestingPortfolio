import React from "react";
import SecondProjectImg from "../assets/pj3-img.png";
import lng1 from "../assets/dotnet-logo.png";
import lng2 from "../assets/c-sharp.png";
import lng4 from "../assets/js.png";
import lng7 from "../assets/bootstrap.png";

function Projectsecond() {
  return (
    <>
      <div className="heading-project text-base xl:text-4xl lg:text-3xl sm:text-2xl leading-relaxed">
        Javah Catering Service
      </div>

      <div className="flex justify-between mb-5">
        <div className="sub-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl lg:text-2xl  ">
          Events and Reservation System
        </div>
        <div
          className="read-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl cursor-pointer"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Read the full details
        </div>
      </div>

      <div className="Project-img-cont w-full mb-5 h-1/2">
        <img
          className="w-full h-full"
          src={SecondProjectImg}
          onClick={() => document.getElementById("my_modal_2").showModal()}
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
          <p className="read-heading-project  ">2022-2023</p>
        </div>
      </div>
      {/* end of new div */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <h3 className="font-bold text-2xl ">Javah Catering Service</h3>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="img-cont-modal py-4 ">
            <img className="img-modal w-full h-full" src={SecondProjectImg} />
          </div>

          <p className="py-4">
            The Javah Catering Reservation System is designed to streamline the
            booking process for Javah Catering Services. Developed to enhance
            customer convenience, this system allows clients to select event
            types, choose venues, and schedule dates effortlessly. The admin can
            manage reservations, track booking history, and update event
            details, ensuring a seamless and efficient reservation experience.
          </p>
          <div className="py-2 flex gap-3">
            <img className="w-6 h-6" src={lng1} />
            <img className="w-6 h-6" src={lng2} />
            <img className="w-7 h-6" src={lng7} />
            <img className="w-6 h-6" src={lng4} />
          </div>
          <p className="py-1 font-bold text-lg">Features:</p>
          <p className="py-2">
            1. Venue Selection: Customers can input their desired event venue.
            <br></br>
            2. Calendar Integration: Allows customers to choose reservation
            dates and times. <br></br>3. Event Types: Presents a list of events
            that the company can accommodate. <br></br> 4. Admin Reservation
            History: Enables admin to view the history of accommodated
            reservations. <br></br>5. Database Management: Admin can maintain
            and update information about various events. <br></br> 6. Add-Ons
            and Notes: Customers can add extra guests and include additional
            information like allergies. <br></br> 7. Admin-Side Cancellation:
            Admin can cancel reservations if no down payment is made.
          </p>
          <div className="container-btn-footer py-4">
            <button className="btn-modal-footer btn btn-outline">
              Live Preview
            </button>
            <button
              className="btn-modal-footer  btn btn-outline"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/18rOedIWKVI3q9r5XR_hGz-QQ2zrLsdCJ/view?usp=sharing",
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

export default Projectsecond;

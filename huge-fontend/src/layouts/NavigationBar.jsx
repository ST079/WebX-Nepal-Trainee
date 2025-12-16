import React, { use } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import "../styles/Form.css";

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navRef = useRef(null);

  // menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useGSAP(() => {
    gsap.to("#menu-btn", {
      x: showMenu ? navRef.current.offsetWidth : 0,
      duration: 0.8,
      ease: "power3.out",
      backgroundColor: showMenu ? "#424A53" : "white",
      textContent: showMenu ? "X" : "Menu",
      color: showMenu ? "white" : "black",
    });

    gsap.to("#nav-links", {
      x: showMenu ? 0 : -navRef.offsetWidth,
      duration: 0.8,
      ease: "power3.out",
    });
  }, [showMenu]);

  //form

  useGSAP(() => {
    const form = document.getElementById("form-container");
    gsap.to(form, {
      x: showForm ? "0%" : "100%",
      duration: 0.8,
      ease: "power3.out",
      display: showForm ? "block" : "none",
    });
  }, [showForm]);

  return (
    <div className="w-full flex justify-between items-center text-white">
      <div className="flex">
        <Link to="/">
          <h1 className="bg-[#FF0090] text-black py-4 size-15 text-center text-xl cursor-pointer">
            Huge
          </h1>
        </Link>
        <nav
          className="flex items-center relative bg-[#1B1E23] "
          ref={navRef}
          id="nav"
        >
          <button
            className="bg-white text-black py-4 size-15 text-xl text-center cursor-pointer absolute top-0"
            id="menu-btn"
            onClick={toggleMenu}
          >
            Menu
          </button>
          {showMenu && (
            <ul
              className="flex gap-10 ml-10 h-full items-center text-xl w-full pr-2"
              id="nav-links"
            >
              <li>About</li>
              <li>What we do</li>
              <li>Work</li>
              <li>Ideas</li>
              <li>Careers</li>
            </ul>
          )}
        </nav>
      </div>

      <div className="pr-10 text-xl">
        <button
          className=" transform-3d transition-transform duration-400 ease-in-out flex flex-col text-black font-medium h-[56px] w-52 relative cursor-pointer hover:transform-[rotateX(90deg)]"
          id="contact"
          onClick={() => setShowForm(true)}
        >
          <div
            id="front-btn"
            className="absolute bg-white py-5 px-8 transform-[translateZ(35px)] border-0 "
          >
            Let's talk <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
          <div
            id="bottom-btn"
            className="absolute bg-[#48FF65] py-5 px-8 transform-[rotateX(-90deg)] top-[35px] border-0"
          >
            Let's talk <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
        </button>
      </div>

      {/* Form */}
      <div
        className="form-container bg-black h-screen w-[55%] absolute  top-[-40px] right-0 z-100 overflow-y-auto hidden"
        id="form-container"
      >
        <form action="">
          <div className="flex justify-between items-end p-10 text-white  sticky top-10 z-50">
            <h1 className="text-xl font-medium" id="form-head">
              Become a Client -
            </h1>
            <div
              className="grid grid-cols-2 border cursor-pointer"
              id="close-btn"
              onClick={() => {
                setShowForm(false);
              }}
            >
              {/* <!-- Text Button --> */}
              <button
                type="button"
                id="form-close-btn"
                className="text-xl bg-gray-500 p-4"
              >
                Close
              </button>
              {/* <!-- Icon Button --> */}
              <button
                type="button"
                id="form-close-icon"
                className="bg-white text-black text-2xl p-5 flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="flex text-white flex-col">
            <div className="flex flex-col gap-5 p-10 w-full">
              <div className="input-box">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder=""
                  required
                />
                <span>
                  First Name <span className="text-[#FF0091]">*</span>{" "}
                </span>
              </div>

              <div className="input-box">
                <input type="text" id="lname" name="lname" required />
                <span>
                  Last Name <span className="text-[#FF0091]">*</span>
                </span>
              </div>

              <div className="input-box">
                <input type="email" id="email" name="email" required />
                <span>
                  Email Address <span className="text-[#FF0091]">*</span>
                </span>
              </div>

              <div className="input-box">
                <input type="text" id="company" name="company" required />
                <span>
                  Company Name <span className="text-[#FF0091]">*</span>
                </span>
              </div>

              <div className="input-box">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
                <span>
                  Tell us a little bit more{" "}
                  <span className="text-[#FF0091]">*</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-10 w-full">
              <button className="text-black bg-white p-5 text-lg w-1/3 cursor-pointer">
                Let's talk.
              </button>
              <p className="text-lg">
                Learn more about how your information will be used in our{" "}
                <a href="#" className="underline-hover">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col gap-5 p-10 w-full">
              <h2 className="font-medium text-3xl">How else can we help?</h2>
              <div className="flex gap-5 grow w-full text-md">
                <div className="flex flex-col">
                  <p>Become a client.</p>
                  <p className="cursor-pointer underline-hover-2">
                    business@hugeinc.com
                  </p>
                </div>

                <div className="flex flex-col">
                  <p>Join us</p>
                  <p className="cursor-pointer underline-hover-2">
                    jobs@hugeinc.com
                  </p>
                </div>

                <div className="flex flex-col">
                  <p>Press inquiries.</p>
                  <p className="cursor-pointer underline-hover-2">
                    press@hugeinc.com
                  </p>
                </div>

                <div className="flex flex-col">
                  <p>Everything else.</p>
                  <p className="cursor-pointer underline-hover-2">
                    hello@hugeinc.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavigationBar;

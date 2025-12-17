import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "/logo.png";
import "../styles/Loader.css";
const Loader = ({setLoading}) => {
  const counter = { value: 0 };
  useGSAP(() => {
    const display = document.getElementById("counter");
    const loader = document.getElementById("loader"); 
    gsap.to(counter, {
      value: 100,
      duration: 2,
      delay: 1, // 5 seconds
      ease: "linear",
      onUpdate: () => {
        display.textContent = Math.round(counter.value) + "%";
        loader.style.overflow = "hidden";
      },
      onComplete: () => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
        
      }
    });
  }, []);
  return (
    <div
      className="loader-container flex justify-center h-screen w-full"
      id="loader"
    >
      <div id="box"></div>
      <div className="overlay" id="overlay"></div>
      <div id="counter">0%</div>
      <div className="flex items-center justify-center gap-2 absolute top-20 z-50">
        <img
          src={logo}
          className="h-3.75 w-3.75"
          alt="Huge Logo"
          id="logo"
        />
        <div className="text-white text-lg block w-52" id="sub-head"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <h1 className="text-[10rem] text-white" id="head">
          Hello
        </h1>
      </div>
    </div>
  );
};

export default Loader;

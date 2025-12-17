import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "/logo.png";
import { SplitText } from 'gsap/SplitText';

import "../styles/Loader.css";
const Loader = ({ setLoading }) => {
  const counter = { value: 0 };
  const subHeadRef = useRef(null);

  useGSAP(() => {
    const display = document.getElementById("counter");
    const box = document.getElementById("box");
    const head = document.getElementById("head");
    const animateBox = document.getElementById("animate-box");
    const rightBox = document.querySelector(".box-2");
    const leftBox = document.querySelector(".box-1");
    const text = document.getElementById("text");
    const overlay = document.getElementById("overlay");

    // Backgrpund Counter Animation
    gsap.to(counter, {
      value: 100,
      duration: 2,
      delay: 1, // 5 seconds
      ease: "linear",
      onUpdate: () => {
        if (counter.value > 50) {
          head.textContent = ""
          animateBox.style.display = "grid";
        }
        display.textContent = Math.round(counter.value) + "%";
      },
      onComplete: () => {
        const tl = gsap.timeline({
          onComplete: () => setLoading(false) // Loader removed after all animations
        });

        tl.to([rightBox, leftBox], { backgroundColor: "#191919", duration: 0.7 }, "<"); // background change
        tl.to(text, { opacity: 0, duration: 0.2 }, "+=0.6"); // hide text after 0.6s
        tl.to(display, { opacity: 0, duration: 0.2 }, "<");  // hide counter at same time
        tl.to(overlay, { opacity: 0, duration: 0.2 }, "<");  // hide overlay
        tl.to(box, { opacity: 0, duration: 0.2 }, "<");      // hide box

        // Center-line animation
        tl.fromTo("#center-line", { scaleY: 0 }, { display: "block", scaleY: 1, duration: 0.5, ease: "power3.out" });
        tl.to("#center-line", { opacity: 0, duration: 0.3 });

        // Split screen
        tl.to(".box-1", { x: "-100%", duration: 1.7, ease: "power4.inOut" }, "-=0.2");
        tl.to(".box-2", { x: "100%", duration: 1.7, ease: "power4.inOut" }, "<");

      }
    });


    // Subhead Animation
    const texts = ["Delivering firsts", "Defining the future"];
    let index = 0;
    let split;

    function animateText() {
      const element = subHeadRef.current;
      if (!element) return; // safety

      // Kill old animations
      gsap.killTweensOf(element);

      // Revert old SplitText
      if (split) {
        split.revert();
        element.innerHTML = element.textContent;
      }

      // Set new text
      element.textContent = texts[index];

      // Split new text
      split = new SplitText(element, { type: "words" });

      // Animate words
      gsap.from(split.words, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.12,
      });

      index = (index + 1) % texts.length;
    }

    animateText();
    const interval = setInterval(animateText, 1500);

    return () => {
      clearInterval(interval);
      if (split) split.revert();
    };


    //overlay Animation

  }, []);

  return (
    <div
      className="fixed inset-0 loader-container flex justify-center w-full overflow-hidden z-100"
      id="loader"
    >
      <div id="box"></div>
      <div className="absolute inset-0 w-full h-screen bg-black opacity-[0.9] z-10" id="overlay"></div>
      <div id="counter" className="h-screen w-full flex items-center justify-center">0%</div>
      <div className="flex items-center justify-center gap-2 absolute top-20 z-50" id="text">
        <img
          src={logo}
          className="h-3.75 w-3.75"
          alt="Huge Logo"
          id="logo"
        />
        <div className="text-white text-md block w-full text-center" id="sub-head" ref={subHeadRef}></div>
      </div>

      <div
        id="animate-box"
        className="grid-cols-2 absolute inset-0 h-full w-full z-50 overflow-hidden hidden"
      >
        {/* Left */}
        <div className="box-1 bg-transparent text-[10rem] text-white flex items-center justify-end pr-2">
          We
        </div>

        {/* Right */}
        <div className="box-2 bg-transparent text-[10rem] text-white flex items-center justify-start pl-2">
          Are
        </div>

        {/* Center line */}
        <div
          id="center-line"
          className="absolute left-1/2 top-0 w-[5px] h-full bg-white origin-top hidden"
        ></div>
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

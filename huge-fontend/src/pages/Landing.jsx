import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import img1 from "../assets/images/huge/slider1.jpg";
import img2 from "../assets/images/huge/slider2.jpg";
import img3 from "../assets/images/huge/slider3.jpg";
import "../styles/Landing.css";
import { useState, useEffect } from "react";

const Landing = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // refs
    const pointerTextRef = useRef(null);
    const mainSectionRef = useRef(null);
    const boxRef = useRef(null);
    const imgBoxRef = useRef(null);
    const activeIndexRef = useRef(0);

    //   pointing text handlers
    const handleMouseEnter = () => {
        gsap.to(pointerTextRef.current, { opacity: 1, duration: 0.2 });
    };

    const handleMouseMove = (e) => {
        gsap.to(pointerTextRef.current, {
            x: e.clientX + 20,
            y: e.clientY - 80,
            duration: 0.5,
            ease: "power3.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(pointerTextRef.current, { opacity: 0, duration: 0.2 });
    };

    // box movement handler
    const boxmove = (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // calculate rotation based on mouse distance from center
        const rotateY = ((e.clientX - centerX) / centerX) * 7; // left/right rotation
        const rotateX = -((e.clientY - centerY) / centerY) * 4; // up/down rotation

        gsap.to(boxRef.current, {
            rotationY: rotateY,
            rotationX: rotateX,
            duration: 0.2,
            ease: "power2.out",
        });
    };



    useEffect(() => {
        const imgBox = imgBoxRef.current;
        const innerBox = boxRef.current;
        const images = imgBox.querySelectorAll("img");
        let interval;

        // initialize
        images.forEach((img, i) => {
            img.style.opacity = i === 0 ? 1 : 0;
            img.style.position = "absolute";
        });

        const startSwitch = () => {
            gsap.set(imgBox, { display: "flex" });
            interval = setInterval(() => {
                const current = activeIndexRef.current;
                const next = (current + 1) % images.length;

                gsap.to(images[current], { opacity: 0, duration: 0.15 });
                gsap.to(images[next], { opacity: 1, duration: 0.15 });

                activeIndexRef.current = next;
            }, 150);
        };

        const stopSwitch = () => {
            clearInterval(interval);
            gsap.to(imgBox, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => gsap.set(imgBox, { display: "none", opacity: 1 }),
            });
        };

        innerBox.addEventListener("mouseenter", startSwitch);
        innerBox.addEventListener("mouseleave", stopSwitch);

        return () => {
            innerBox.removeEventListener("mouseenter", startSwitch);
            innerBox.removeEventListener("mouseleave", stopSwitch);
            clearInterval(interval);
        };
    }, []);


    return (
        <div
            className="h-screen bg-black"
            ref={mainSectionRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* pointer text */}
            <p
                className="fixed top-0 left-0 z-0 pointer-events-none
             border border-white p-5 text-white text-xl opacity-0 trasition-delay-200"
                id="pointer-text"
                ref={pointerTextRef}
            >
                Scroll to explore
                <i className="fa-solid fa-arrow-down" style={{ color: "#FF0091" }}></i>
            </p>

            <section
                className="w-full h-screen bg-black "
                id="main-section"
                onMouseMove={boxmove}
            >
                <div className="box-container">
                    <div
                        className="justify-center items-center w-full h-screen hidden"
                        ref={imgBoxRef}
                        id="img-box"
                    >
                        <img
                            src={img1}
                            className="img absolute w-full h-full object-fill"
                        />
                        <img src={img2} className="absolute w-full h-full object-fill" />
                        <img src={img3} className="absolute w-full h-full object-fill" />
                    </div>
                    <div className="inner-box" id="inner-box" ref={boxRef}>
                        <div
                            className="box absolute flex justify-center items-center bg-[#FF0091] text-5xl cursor-pointer"
                            id="front"
                        >
                            Huge
                        </div>
                        <div className="box absolute object-contain" id="right">
                            <img src={img1} className="h-full w-full" alt="" />
                        </div>
                        <div className="box absolute object-contain" id="left">
                            <img src={img2} className="h-full w-full" alt="" />
                        </div>
                        <div className="box absolute object-contain" id="back">
                            <img src={img3} className="h-full w-full" alt="" />
                        </div>
                        <div
                            className="box absolute flex justify-center items-center bg-[#FF0091] text-5xl cursor-pointer"
                            id="top"
                        ></div>
                        <div
                            className="box absolute flex justify-center items-center bg-[#FF0091] text-5xl cursor-pointer"
                            id="bottom"
                        ></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;

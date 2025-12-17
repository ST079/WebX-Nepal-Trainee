import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const PointerText = ({ text = "Scroll to explore" }) => {
    const pointerRef = useRef(null);

    // GSAP mouse-follow animation
    const handleMouseMove = (e) => {
        gsap.to(pointerRef.current, {
            x: e.clientX + 20,
            y: e.clientY - 80,
            duration: 0.5,
            ease: "power3.out",
        });
    };

    const handleMouseEnter = () => {
        gsap.to(pointerRef.current, { opacity: 1, duration: 0.2 });
    };

    const handleMouseLeave = () => {
        gsap.to(pointerRef.current, { opacity: 0, duration: 0.2 });
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useGSAP(() => {
        gsap.to(pointerRef.current, {
            borderColor: "black",
            color: "black",
            scrollTrigger: {
                trigger: "body",
                start: "top center",
                end: "bottom top",
                scrub: true,
                markers: false,
            },
        });

    }, []);

    return (
        <p
            ref={pointerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="fixed top-0 left-0 z-10 pointer-events-none border border-white p-5 text-white text-xl transition-opacity"
        >
            {text} <i className="fa-solid fa-arrow-down" style={{ color: "#FF0091" }}></i>
        </p>
    );
};

export default PointerText;

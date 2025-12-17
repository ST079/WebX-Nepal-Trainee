import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);    

    return (
        <div className='h-screen'>About</div>
    )
}

export default About
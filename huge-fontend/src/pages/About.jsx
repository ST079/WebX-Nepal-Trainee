import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);    

    return (
        <div className='h-screen'>
            <h1 className='text-9xl pt-40'>Who We Are -</h1>
        </div>
    )
}

export default About
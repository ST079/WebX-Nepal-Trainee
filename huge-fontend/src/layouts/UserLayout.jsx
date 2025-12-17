import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { useState } from "react";
import Loader from "../components/Loader.jsx";
import Landing from "../pages/Landing.jsx";
import About from "../pages/About.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const UserLayout = () => {
  const [loading, setLoading] = useState(true);
  
  return (

    <div>
      {loading && <Loader setLoading={setLoading} />}
      <header className="fixed top-10 left-10 w-full z-50">
        <NavigationBar />
      </header>
      <main>
        <Landing />
        <About />
      </main>
    </div>
  );
};

export default UserLayout;

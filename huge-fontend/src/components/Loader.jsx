import React from "react";

const Loader = () => {
  return (
    <div>
      <div
        class="loader-container flex justify-center h-screen w-full"
        id="loader"
      >
        <div id="box"></div>
        <div class="overlay" id="overlay"></div>
        <div id="counter">0%</div>
        <div class="flex items-center justify-center gap-2 absolute top-20 z-50">
          <img
            src="assets/logo/logo.png"
            class="h-3.75 w-3.75"
            alt="Huge Logo"
            id="logo"
          />
          <div class="text-white text-lg block w-52" id="sub-head"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center z-50">
          <h1 class="text-[10rem] text-white" id="head">
            Hello
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;

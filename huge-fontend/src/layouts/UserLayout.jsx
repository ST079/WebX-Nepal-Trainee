import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const UserLayout = () => {
  return (
    <div>
      <header className="fixed top-10 left-10 w-full z-50">
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;

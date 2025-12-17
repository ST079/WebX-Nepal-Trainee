import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import UserLayout from "./layouts/UserLayout.jsx";
import { useState } from "react";
import Loader from "./components/Loader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? <Loader setLoading={setLoading} /> : (
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>)}
    </div>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import Latest from "./pages/Latest";
import AddData from "./pages/AddData";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tvshows" element={<TvShows />} />
        <Route path="movies" element={<Movies />} />
        <Route path="latest" element={<Latest />} />
        <Route path="addform" element={<AddData />} />
      </Routes>
    </>
  );
};

export default Routing;

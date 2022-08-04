import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import RecipePage from "./pages/RecipePage/RecipePage";
import Search from "./pages/Search/Search";

let App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route
            path="*"
            element={
              <h1>
                404 <br />
                page not found
              </h1>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;

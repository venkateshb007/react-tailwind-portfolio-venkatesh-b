import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";


function App() {
  return (
    <div className="w-full h-auto bg-black text-lightText">
      <div className="max-w-screen-xl mx-auto px-16">
      <Navbar/>
      <Banner/>
      <Features/>
      </div>
    </div>
  )
}

export default App;

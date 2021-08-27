import React from "react";
export const HeroSection = () => {
  return (
    <main
      className="h-screen flex flex-row justify-center items-center"
      id="home">
      <div>
        <h1 className="font-bold text-center leading-tight">
          Start Crafting Your
          <br />
          <span className="text-purple-600">Next Great Idea</span>
        </h1>
        <p className="text-lg text-center mt-4">
          Simplifying the creation of landing pages blog pages, <br />{" "}
          appliaction pages and so much more!
        </p>
        <div className="flex flex-col items-center mt-10">
          <button className="pry-btn">Purcahase Now</button>
          <button className="sec-btn mt-2">Learn More</button>
        </div>
      </div>
    </main>
  );
};

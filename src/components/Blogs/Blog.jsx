import React from "react";

export const Blog = ({ imageSrc, title, paragraph, badge, bgColor }) => {
  return (
    <article
      className={`bg-${bgColor} rounded-b-lg overflow-hidden origin-bottom transform transition delay-100 hover:scale-y-105 `}>
      <img className="w-full h-96 object-cover" src={imageSrc} alt="" />
      <div className="p-4 md:p-6 md:px-8 relative">
        <div
          className={`p-2 md:py-2 md:px-3 bg-white absolute -top-5 rounded-full text-${bgColor} font-bold`}>
          <h6>{badge}</h6>
        </div>
        <h3 className=" md:text-5xl text-white font-bold">{title}</h3>
        <p className="leading-normal text-white mt-2 md:mt-4">{paragraph}</p>
      </div>
    </article>
  );
};

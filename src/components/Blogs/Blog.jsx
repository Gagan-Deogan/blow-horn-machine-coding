import React from "react";

export const Blog = ({ imageSrc, title, paragraph, badge, bgColor }) => {
  return (
    <article className={`bg-${bgColor} rounded-b-lg `}>
      <img className="w-full" src={imageSrc} alt="" />
      <div className="p-5 relative">
        <div
          className={`py-2 px-3  bg-white absolute -top-5 rounded-full text-${bgColor} font-bold`}>
          {badge}
        </div>
        <h3 className="text-5xl text-white font-bold">{title}</h3>
        <p className="text-white mt-4">{paragraph}</p>
      </div>
    </article>
  );
};

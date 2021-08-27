import React from "react";

export const SmBlog = ({ imageSrc, title, paragraph, badge, bgColor }) => {
  return (
    <article className="rounded-lg overflow-hidden border">
      <img className="w-full" src={imageSrc} alt="" />
      <div className="px-2 py-4 md:px-5 md:py-8 relative">
        <div
          className={`p-2 md:py-2 md:px-3 text-white absolute -top-5 rounded-full bg-${bgColor} font-bold`}>
          <h6 className="text-sm">{badge}</h6>
        </div>
        <h4 className="text-lg md:text-xl font-bold">{title}</h4>
        <p className="leading-normal mt-1 md:mt-2">{paragraph}</p>
      </div>
    </article>
  );
};

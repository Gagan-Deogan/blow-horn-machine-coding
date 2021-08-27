import React from "react";
import { Twitter, Git } from "../../assests/images/Icons";
export const MemberCard = ({ name, imageSrc, designation, bgColor }) => {
  return (
    <article className="mt-8">
      <div
        className={`p-2 md:p-4 bg-${bgColor}-100 rounded-tl-full rounded-b-full`}>
        <div className="w-36 h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src={imageSrc}
            alt={name}
          />
        </div>
      </div>
      <h6 className="mt-2">{name}</h6>
      <h6 className="text-blue-700">{designation}</h6>
      <div className="flex flex-row justify-center text-gray-500">
        <div className="mx-2">
          <Twitter />
        </div>
        <div className="mx-2">
          <Git />
        </div>
      </div>
    </article>
  );
};

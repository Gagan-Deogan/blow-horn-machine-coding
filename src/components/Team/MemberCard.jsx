import React from "react";

export const MemberCard = ({ name, imageSrc, designation }) => {
  return (
    <div className="">
      <div className="p-4 bg-blue-200 rounded-tl-full rounded-b-full">
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src={imageSrc}
            alt={name}
          />
        </div>
      </div>
      <h6 className="">{name}</h6>
      <h6 className="text-blue-700">{designation}</h6>
    </div>
  );
};

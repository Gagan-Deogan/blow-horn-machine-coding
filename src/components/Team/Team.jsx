import React from "react";
import { MemberCard } from "./MemberCard";
const members = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559637621-d766677659e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Freddy Smith",
    designation: "CEO and Founder",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559637621-d766677659e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Carl Jones",
    designation: "CTO and Co-Founder",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559637621-d766677659e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Susan Peterson",
    designation: "Marketing Directory	",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559637621-d766677659e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Tommy Barnes",
    designation: "Designer",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559637621-d766677659e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Ron Jenson	",
    designation: "Senior Developer",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559637621-d766677659e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Pete Tompkins",
    designation: "Web Developer",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559637621-d766677659e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Kelly Richards",
    designation: "Sales Manager",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559637621-d766677659e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Alexis Jordan",
    designation: "Affiliate Manager",
  },
];

export const Team = () => {
  return (
    <section>
      <h6 className="text-blue-600">OUR TEAM</h6>
      <h2 className="font-bold text-6xl">
        An incredible team of <br /> amazing individuals
      </h2>
      <div className="grid grid-cols-4 justify-items-center text-center gap-8 mt-10">
        {members.map(({ imageSrc, name, designation }) => (
          <MemberCard
            imageSrc={imageSrc}
            name={name}
            designation={designation}
            key={name}
          />
        ))}
      </div>
    </section>
  );
};

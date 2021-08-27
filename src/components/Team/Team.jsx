import React from "react";
import { MemberCard } from "./MemberCard";
const members = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
    name: "Freddy Smith",
    designation: "CEO and Founder",
    bgColor: "blue",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    name: "Carl Jones",
    designation: "CTO and Co-Founder",
    bgColor: "red",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Susan Peterson",
    designation: "Marketing Directory	",
    bgColor: "green",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1587398396609-5bc29d58a096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=335&q=80",
    name: "Tommy Barnes",
    designation: "Designer",
    bgColor: "indigo",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559637621-d766677659e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Ron Jenson	",
    designation: "Senior Developer",
    bgColor: "indigo",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1621012649112-d1724740b0da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Pete Tompkins",
    designation: "Web Developer",
    bgColor: "blue",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1575779266306-a31239c3708f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Kelly Richards",
    designation: "Sales Manager",
    bgColor: "red",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1608513732982-e13d86139cb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Alexis Jordan",
    designation: "Affiliate Manager",
    bgColor: "green",
  },
];

export const Team = () => {
  return (
    <div className="relative">
      <div className="absolute top-16 md:top-28 right-0 w-24 h-12 md:w-48 md:h-24 bg-blue-200 rounded-l-full"></div>
      <section className="relative ">
        <h6 className="text-blue-600 ">OUR TEAM</h6>
        <h2 className="font-bold md:text-4xl lg:text-6xl">
          An incredible team of <br /> amazing individuals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center text-center gap-8 mt-10">
          {members.map(({ imageSrc, name, designation, bgColor }) => (
            <MemberCard
              imageSrc={imageSrc}
              name={name}
              designation={designation}
              bgColor={bgColor}
              key={name}
            />
          ))}
        </div>
      </section>
      <div className="relative shadow-md w-full h-2 " />
    </div>
  );
};

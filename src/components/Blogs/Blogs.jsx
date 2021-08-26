import React from "react";
import { Blog } from "./Blog";

const blogs = [
  {
    title: "Refreshing Designs",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    imageSrc:
      "https://images.unsplash.com/photo-1588867702719-969c8ac733d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
    badge: "RESOURCES",
    bgColor: "purple-500",
  },
  {
    title: "Refreshing Designs",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    imageSrc:
      "https://images.unsplash.com/photo-1588867702719-969c8ac733d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
    badge: "RESOURCES",
    bgColor: "blue-500",
  },
  {
    title: "Refreshing Designs",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    imageSrc:
      "https://images.unsplash.com/photo-1588867702719-969c8ac733d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
    badge: "RESOURCES",
    bgColor: "yellow-500",
  },
];

export const Blogs = () => {
  return (
    <section>
      <h2 className="font-extrabold">The Project Blog</h2>
      <p className="mt-4">Designs and layouts to help you with your app.</p>
      <div className="grid grid-cols-3 gap-4 mt-16">
        {blogs.map(({ imageSrc, title, paragraph, badge, bgColor }) => (
          <Blog
            imageSrc={imageSrc}
            title={title}
            paragraph={paragraph}
            badge={badge}
            bgColor={bgColor}
          />
        ))}
      </div>
    </section>
  );
};

import React from "react";
import { details } from "../../utils";

const Detail = ({ imageSrc, title, paragarph, properties, index }) => {
  return (
    <article
      className={`flex flex-col my-6 md:my-12 items-center ${
        index === 1 ? "md:flex-row-reverse" : "md:flex-row"
      }`}>
      <div className="flex flex-row justify-center md:w-1/2">
        <img className="h-80 " src={imageSrc} alt={title} />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <header>
          <h3 className="font-bold">{title}</h3>
          <p className="my-1 md:my-3">{paragarph}</p>
        </header>
        <ul className="flex flex-col mt-2 items-center md:items-start">
          {properties.map((property) => (
            <li
              className="text-gray-400 inline-flex items-center"
              key={property}>
              <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2 hidden md:block"></div>
              {property}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const Details = () => {
  return (
    <section>
      {details.map(({ imageSrc, title, paragarph, properties }, index) => (
        <Detail
          imageSrc={imageSrc}
          title={title}
          paragarph={paragarph}
          properties={properties}
          index={index}
          key={title}
        />
      ))}
    </section>
  );
};

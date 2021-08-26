import React from "react";
import productivityImage from "../../assests/images/logos/productivity.png";
import settingImage from "../../assests/images/logos/settings.png";
const details = [
  {
    imageSrc: productivityImage,
    title: "Boost Productivity",
    paragarph:
      "Build an atmosphere that creates productivity in your organization and your company culture.",
    properties: [
      "Maximize productivity and growth",
      "Speed past your competition",
      "Learn the top techniques",
    ],
  },
  {
    imageSrc: settingImage,
    title: "Automated Tasks",
    paragarph:
      "Save time and money with our revolutionary services. We are the leaders in the industry.",
    properties: [
      "Automated task management workflow",
      "Detailed analytics for your data",
      "Some awesome integrations",
    ],
  },
];

const Detail = ({ imageSrc, title, paragarph, properties, index }) => {
  return (
    <article
      className={`flex flex-col my-6 md:my-12 ${
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
        <ul>
          {properties.map((property) => (
            <li className="text-gray-400" key={property}>
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

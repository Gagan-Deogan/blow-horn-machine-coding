import React from "react";
import { BundlesIcon, CertifiedIcon } from "../../assests/images/Icons";
const features = [
  {
    icon: <CertifiedIcon />,
    title: "Certifications",
    paragraph:
      "Each of our plan will provide you and your team with certifications",
  },
  {
    icon: <BundlesIcon />,
    title: "Developer Tools",
    paragraph:
      "Developer tools to help grow your application and keep it up-to-date.",
  },
  {
    icon: <CertifiedIcon />,
    title: "Notifications",
    paragraph:
      "Send out notifications to all your customers to keep them engaged.",
  },
  {
    icon: <CertifiedIcon />,
    title: "Building Blocks",
    paragraph:
      "The right kind of building blocks to take your company to the next level.",
  },
  {
    icon: <CertifiedIcon />,
    title: "Bundles",
    paragraph: "High-quality bundles of awesome tools to help you out.",
  },
  {
    icon: <CertifiedIcon />,
    title: "Coupons",
    paragraph:
      "Coupons system to provide special offers and discounts for your app.",
  },
];

const FeatureCard = ({ icon, title, paragraph }) => {
  return (
    <article className="bg-gray-100 rounded text-center flex flex-col items-center py-8 px-6 m-2">
      <div className="w-16 h-16 rounded-full bg-blue-400 text-white flex flex-row justify-center items-center">
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </article>
  );
};

export const Features = () => {
  return (
    <>
      <header className="text-center">
        <h2 className="font-bold">Our Features</h2>
        <p>Check out our list of awesome features below.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map(({ icon, title, paragraph }) => (
          <FeatureCard
            icon={icon}
            title={title}
            paragraph={paragraph}
            key={title}
          />
        ))}
      </div>
    </>
  );
};

import React from "react";
import disneyLogo from "../../assests/images/logos/disney.png";
import googleLogo from "../../assests/images/logos/google.png";
import youtubeLogo from "../../assests/images/logos/youtube.png";

const trustedCompanies = [
  {
    src: disneyLogo,
    alt: "disney-logo",
  },
  {
    src: googleLogo,
    alt: "google-logo",
  },
  {
    src: youtubeLogo,
    alt: "youtube-logo",
  },
  {
    src: disneyLogo,
    alt: "disney-logo",
  },
  {
    src: googleLogo,
    alt: "google-logo",
  },
  {
    src: youtubeLogo,
    alt: "youtube-logo",
  },
];

export const TrustedCompaines = () => {
  return (
    <section>
      <h6 className="font-bold text-center">
        TRUSTED BY TOP-LEADING COMPANIES.
      </h6>
      <div className="flex flex-row w-full flex-wrap justify-center mt-8">
        {trustedCompanies.map(({ src, alt }) => (
          <div className="mx-2 md:mx-4 w-24 md:w-48">
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

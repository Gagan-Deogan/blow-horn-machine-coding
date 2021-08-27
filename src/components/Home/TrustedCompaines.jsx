import React from "react";
import disneyLogo from "../../assests/images/logos/disney.png";
import googleLogo from "../../assests/images/logos/google.png";
import youtubeLogo from "../../assests/images/logos/youtube.png";
import shopifyLogo from "../../assests/images/logos/shopify.png";
import slackLogo from "../../assests/images/logos/slack.png";
import hubspotLogo from "../../assests/images/logos/hubspot.png";
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
    src: hubspotLogo,
    alt: "hubspot-logo",
  },
  {
    src: youtubeLogo,
    alt: "youtube-logo",
  },
  {
    src: slackLogo,
    alt: "slack-logo",
  },
  {
    src: shopifyLogo,
    alt: "shopify-logo",
  },
];

export const TrustedCompaines = () => {
  return (
    <section>
      <h6 className="font-bold text-center">
        TRUSTED BY TOP-LEADING COMPANIES.
      </h6>
      <div className="flex flex-row w-full flex-wrap justify-center items-center mt-8">
        {trustedCompanies.map(({ src, alt }) => (
          <div className="mx-2 md:mx-4 w-24 md:w-48" key={alt}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

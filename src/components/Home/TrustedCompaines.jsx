import React from "react";
import { trustedCompanies } from "../../utils";

export const TrustedCompaines = () => {
  return (
    <section>
      <h6 className="font-bold text-center">
        TRUSTED BY TOP-LEADING COMPANIES.
      </h6>
      <div className="flex flex-row w-full flex-wrap justify-center items-center mt-8">
        {trustedCompanies.map(({ src, alt }) => (
          <div className="mx-2 md:mx-4 w-24 md:w-28" key={alt}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

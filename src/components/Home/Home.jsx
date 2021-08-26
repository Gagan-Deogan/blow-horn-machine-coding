import React from "react";
import { HeroSection } from "./Hero";
import { TrustedCompaines } from "./TrustedCompaines";
import { Details } from "./Details";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustedCompaines />
      <Details />
    </>
  );
};

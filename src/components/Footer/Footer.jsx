import React from "react";
import {
  Twitter,
  Git,
  Facebook,
  Instagram,
  Dribble,
} from "../../assests/images/Icons";
export const Footer = () => {
  return (
    <section id="contact">
      <div className="flex flex-row justify-center text-gray-500">
        <h6 className="mx-4 font-bold">About</h6>
        <h6 className="mx-4 font-bold">Blog</h6>
        <h6 className="mx-4 font-bold">Team</h6>
        <h6 className="mx-4 font-bold">Pricing</h6>
        <h6 className="mx-4 font-bold">Contact</h6>
        <h6 className="mx-4 font-bold">Terms</h6>
      </div>
      <div className="flex flex-row justify-center text-gray-500 mt-4">
        <div className="mx-2">
          <Facebook />
        </div>
        <div className="mx-2">
          <Instagram />
        </div>
        <div className="mx-2">
          <Twitter />
        </div>
        <div className="mx-2">
          <Git />
        </div>
        <div className="mx-2">
          <Dribble />
        </div>
      </div>
      <h6 className="text-center text-gray-500 mt-4">
        © 2021 SomeCompany, Inc. All rights reversed.
      </h6>
    </section>
  );
};

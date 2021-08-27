import React from "react";
import Twitter from "../../assests/images/Icons/Twitter.svg";
import Git from "../../assests/images/Icons/Git.svg";
import Facebook from "../../assests/images/Icons/Facebook.svg";
import Instagram from "../../assests/images/Icons/Instagram.svg";
import Dribble from "../../assests/images/Icons/Dribble.svg";

export const Footer = () => {
  return (
    <section id="contact">
      <div className="flex flex-row flex-wrap w-full justify-center text-gray-500">
        <h6 className="mx-4 font-bold">About</h6>
        <h6 className="mx-4 font-bold">Blog</h6>
        <h6 className="mx-4 font-bold">Team</h6>
        <h6 className="mx-4 font-bold">Pricing</h6>
        <h6 className="mx-4 font-bold">Contact</h6>
        <h6 className="mx-4 font-bold">Terms</h6>
      </div>
      <div className="flex flex-row justify-center text-gray-500 mt-4">
        <div className="mx-2">
          <img src={Facebook} alt="" />
        </div>
        <div className="mx-2">
          <img src={Instagram} alt="" />
        </div>
        <div className="mx-2">
          <img src={Twitter} alt="" />
        </div>
        <div className="mx-2">
          <img src={Git} alt="" />
        </div>
        <div className="mx-2">
          <img src={Dribble} alt="" />
        </div>
      </div>
      <h6 className="text-center text-gray-500 mt-4 mb-4">
        © 2021 SomeCompany, Inc. All rights reversed.
      </h6>
    </section>
  );
};

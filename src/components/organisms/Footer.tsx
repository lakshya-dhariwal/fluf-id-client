import React from "react";
import { GradientBadge } from "../molecules/GradientBadge.component";
import { FaRss, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";

function Footer() {
  return (
    <div className="relative bg-black p-[45px] font-mono">
      <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
      <div className="flex justify-around flex-col sm:flex-row gap-10  sm:p-[100px]">
        <div className="">
          <h1 className="text-3xl text-emerald-400">fluf.id</h1>
          <p className="text-sm  text-gray-400 flex flex-row items-center gap-1">
            built by{" "}
            <img
              src="/bruhma.jpg"
              alt="Bruhma Labs"
              className="h-[25px] rounded mx-[5px]"
            />
            Bruhma Labs
          </p>
        </div>
        <div className="flex flex-col gap-2 text-gray-400">
          <div className="hover:text-emerald-500 cursor-pointer flex-row flex gap-1 items-center">
            <FaTwitter /> Twitter
          </div>
          <div className="hover:text-emerald-500 cursor-pointer flex-row flex gap-1 items-center">
            <IoMail />
            Mail
          </div>
          <div className="hover:text-emerald-500 cursor-pointer flex-row flex gap-1 items-center">
            <SiGoogledocs />
            Gitbook
          </div>
          <div className="hover:text-emerald-500 cursor-pointer flex-row flex gap-2 items-center ">
            <FaRss />
            Blog
          </div>
        </div>
      </div>
      <div className="text-neutral500 text-sm mt-4 text-center">
        built by 🎒 nomads for the 🌏 world
      </div>
    </div>
  );
}

export default Footer;

import React, { useState } from "react";
import socialMediaData from "../data/socialData.json";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import {
  TbSquareArrowRightFilled,
  TbSquareArrowLeftFilled,
} from "react-icons/tb";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <div className="fixed hidden sm:flex flex-col h-full justify-center max-w-full  text-white p-5 gap-y-5">
        <Link href={socialMediaData.linkedin} target="_blank">
          <FaLinkedin className="hover:text-[#FBBF64] transition-all duration-200 w-[200%] h-[200%]" />
        </Link>
        <Link href={socialMediaData.twitter} target="_blank">
          <FaTwitter className="hover:text-[#FBBF64] transition-all duration-200 w-[200%] h-[200%]" />
        </Link>
        <Link href={socialMediaData.github} target="_blank">
          <FaGithub className="hover:text-[#FBBF64] transition-all duration-200 w-[200%] h-[200%]" />
        </Link>
        <Link href={socialMediaData.email} target="_blank">
          <FaEnvelope className="hover:text-[#FBBF64] transition-all duration-200 w-[200%] h-[200%]" />
        </Link>
      </div>
      <div className="fixed sm:hidden flex flex-col h-full justify-end max-w-full text-white p-5 gap-y-5">
        {sidebar ? (
          <div className="text-4xl" onClick={() => setSidebar(!sidebar)}>
            <TbSquareArrowRightFilled />
          </div>
        ) : (
          <div
            className={` transition-transform duration-300 sm:translate-x-0 flex flex-col`}
          >
            <div className="flex flex-col gap-y-2 rounded-xl text-xl">
              <Link href={socialMediaData.linkedin} target="_blank">
                <FaLinkedin className="hover:text-[#FBBF64] transition-all shadow-black shadow-xl duration-200 w-[100%] h-[100%]" />
              </Link>
              <Link href={socialMediaData.twitter} target="_blank">
                <FaTwitter className="hover:text-[#FBBF64] transition-all shadow-black shadow-xl duration-200 w-[100%] h-[100%]" />
              </Link>
              <Link href={socialMediaData.github} target="_blank">
                <FaGithub className="hover:text-[#FBBF64] transition-all duration-200 w-[100%] h-[100%]" />
              </Link>
              <Link href={socialMediaData.email} target="_blank">
                <FaEnvelope className="hover:text-[#FBBF64] transition-all duration-200 w-[100%] h-[100%]" />
              </Link>
              <div className="pt-2" onClick={() => setSidebar(!sidebar)}>
                <TbSquareArrowLeftFilled className="text-4xl text-[#fbbf64]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;

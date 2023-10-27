import React from 'react';
import socialMediaData from '../data/socialData.json';
import {IconContext} from 'react-icons'
import * as ReactIcons from 'react-icons/fa';
import Link from 'next/link';
import {FaLinkedin, FaTwitter, FaGithub, FaEnvelope} from 'react-icons/fa'

const Sidebar= () => {
  return (
    <div className="fixed flex flex-col h-full justify-center max-w-full  text-white p-5 gap-y-5">
        <Link href={socialMediaData.linkedin} target='_blank'><FaLinkedin className='hover:text-[#FBBF64] transition-all duration-200 w-[200%] h-[200%]'/></Link>
        <Link href={socialMediaData.twitter} target='_blank'><FaTwitter className='hover:text-[#FBBF64] transition-all duration-200 w-[200%] h-[200%]'/></Link>
        <Link href={socialMediaData.github} target='_blank'><FaGithub className='hover:text-[#FBBF64] transition-all duration-200 w-[200%] h-[200%]'/></Link>
        <Link href={socialMediaData.email} target='_blank'><FaEnvelope className='hover:text-[#FBBF64] transition-all duration-200 w-[200%] h-[200%]'/></Link>
    </div>
  );
};

export default Sidebar;

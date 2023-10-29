"use client"
import BlogButton from "./components/blogButton";
import Sidebar from "./components/sidebar";
import Profile from "./components/profile";
import Section2 from "./components/section2";
import { useState } from "react";
import Work from './components/work'
import Carousel from './components/carousel'

export default function Home() {
  const [knowMore, setKnowMore] = useState(false)

  return (
    <div className="container">
      <div className="w-full h-full top-0 text-white z-20">
        <Sidebar />
      </div>
      <div className="hidden sm:block fixed z-20 top-5 md:right-20 right-5">
        <BlogButton />
      </div>
      <section id='profile' className="flex flex-col items-center justify-center">
        <Profile />
      </section>
      <section className="flex flex-col items-center justify-center pb-10 md:pb-16">
        <Section2/>
        <div onClick={()=> setKnowMore(true)} className={`${!knowMore ? 'cursor-pointer blog_button mt-10 md:mt-0' : 'hidden'}`}>Know More</div>
      </section>
      {knowMore && (
        <section id='work'>
          <Work/>
        </section>
      )}
      {knowMore && (
        <section className="flex flex-col items-center py-10 md:pb-16 z-10">
          <Carousel/>
          <div onClick={()=> setKnowMore(false)} className={`${knowMore ? 'cursor-pointer blog_button mt-10 md:mt-0' : 'hidden'}`}>Let{"'"}s get back</div>
        </section>
      )}
    </div>
  );
}

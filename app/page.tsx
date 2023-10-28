"use client"
import BlogButton from "./components/blogButton";
import Sidebar from "./components/sidebar";
import Profile from "./components/profile";
import Section2 from "./components/section2";
import { RefObject, useEffect, useRef, useState } from "react";
import Work from './components/work'
import Carousel from './components/carousel'

export default function Home() {
  const [knowMore, setKnowMore] = useState(false)

  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");

    if (nextSection) {
      const offsetTop = nextSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (knowMore) {
      scrollToNextSection();
    }
  }, [knowMore]);

  return (
    <div className="container">
      <div className="w-full h-full top-0 text-white z-20">
        <Sidebar />
      </div>
      <div className="fixed z-20 top-5 md:right-20 right-5">
        <BlogButton />
      </div>
      <section className="flex flex-col items-center justify-center">
        <Profile />
      </section>
      <section className="flex flex-col items-center justify-center pb-10 md:pb-16">
        <Section2/>
        <div onClick={()=> setKnowMore(true)} className={`${!knowMore ? 'cursor-pointer blog_button mt-10 md:mt-0' : 'hidden'}`}>Know More</div>
      </section>
      {knowMore && (
        <section>
          <Work/>
        </section>
      )}
      {knowMore && (
        <section className="flex flex-col items-center pb-10 md:pb-16 z-10">
          <Carousel/>
          <div onClick={()=> setKnowMore(false)} className={`${knowMore ? 'cursor-pointer blog_button mt-10 md:mt-0' : 'hidden'}`}>Let{"'"}s get back</div>
        </section>
      )}
    </div>
  );
}

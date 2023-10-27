import Image from "next/image";
import Stars from "./components/stars";
import BlogButton from "./components/blogButton";
import Sidebar from "./components/sidebar";
import Profile from "./components/profile";

export default function Home() {
  return (
    <div className="container">
      <div className="w-full h-full top-0 text-white z-20">
        <Sidebar />
      </div>
      <div className="fixed z-20 top-5 md:right-20 right-5">
        <BlogButton />
      </div>
      <section
        id="profile"
        className="flex flex-col items-center justify-center"
      >
        <Profile />
      </section>
      <section
        id="profile"
        className="flex flex-col items-center justify-center"
      >
        <Profile />
      </section>
      <section
        id="profile"
        className="flex flex-col items-center justify-center"
      >
        <Profile />
      </section>
    </div>
  );
}

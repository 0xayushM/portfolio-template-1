import Image from "next/image";
import React from "react";
import profileData from "../data/profileData.json";
import Quote from "./quote";
import BlogButton from "./blogButton";
import Stars from "./stars";
import Link from "next/link";
const Profile = () => {
  const { greeting, profileImage, description } = profileData;

  return (
    <div className="section">
      <div className="profile_container flex flex-col gap-y-2 sm:gap-y-5 w-2/3 items-center justify-center">
        <h1 className="heading text-4xl">{greeting}</h1>
        <div className="border_style w-full flex items-center gap-10 flex-col lg:p-16 lg:flex-row z-10">
          <Image
            src={profileImage.src}
            height={profileImage.height}
            width={profileImage.width}
            alt={profileImage.alt}
          />
          <div className="description tracking-wider">
            <div className="content text-xl">
              <p
                dangerouslySetInnerHTML={{
                  __html: description.content
                    .replace(/<highlight>/g, '<span class="highlight">')
                    .replace(/<\/highlight>/g, "</span>"),
                }}
              />
              <br />
              <p>What I do :</p>
              <ul>
                {description.bulletedContent.map((bullet, index) => (
                  <Link href={bullet.url} target="_blank" className={bullet.url === "" ? 'cursor-default pointer-events-none' : 'cursor-pointer'}
                  >
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: bullet.bullet
                        .replace(/<highlight>/g, '<span class="highlight">')
                        .replace(/<\/highlight>/g, "</span>"),
                    }}
                  />
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Quote/>
      </div>
      <Stars />
    </div>
  );
};

export default Profile;

"use client";

import React, { useState } from "react";
import FilterBar from './filterBar';
import workExData from "../data/workExData.json";
import Stars from "./stars";
import Link from "next/link";

const Work = () => {
    const typesSet = new Set<string>(
      workExData.data.flatMap((item) => item.type)
    );
    const types = ["All", ...typesSet];
    const [selectedType, setSelectedType] = useState<string>("All");
  
    const filteredData = selectedType === "All"
      ? workExData.data
      : workExData.data.filter((item) => item.type.includes(selectedType));
  

  return (
    <div className="section flex flex-col items-center justify-center gap-y-5 pt-10">
      <h1 className="heading flex items-center justify-center w-[80%] text-center text-3xl md:text-4xl">{workExData.heading}</h1>
      <FilterBar
        types={types}
        selectedType={selectedType}
        onSelectType={setSelectedType}
      />
      <div className="experience_container w-[80%]">
        {filteredData.map((item, index) => (
          <div key={index} className="experience_content h-[32vh]">
            <div className="title_box pb-4">
              <div className="experience_name"> {item.organization}</div>
              <div className="duration">{item.duration}</div>
            </div>
            <hr />
            <div className="role">{item.role}</div>
            <div className="work_skill">
            {item.skills.map((skill,index) => (
                <div className="work_skill_name" key= {index}>{skill}
                    </div>
            ))}
            </div>
            <ul className="work_description cutoff-text">
              {item.description.map((bullet, index) => (
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
        ))}
      </div>
      <Stars/>
    </div>
  );
};

export default Work;

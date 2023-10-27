import Image from "next/image";
import React from "react";
import skillsData from "../data/skillsData.json";
import ToolTip from "./toolTip";


const Skills = () => {
  return (
        <div className="flex flex-col gap-10">
          <h1 className="heading text-4xl">{skillsData.heading}</h1>
          <div className="">
            <div className="flex flex-row flex-wrap px-10 items-center justify-center gap-10">
              {skillsData.data.map((skill) => (
                <div className="icon_container " key={skill.name}>
                  <ToolTip section="skills" tooltip={skill.name}>
                    <Image
                      className="image"
                      src={skill.image}
                      height={skill.height}
                      width={skill.width}
                      alt={skill.alt}
                      data-tooltip={skill.name}
                    />
                  </ToolTip>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
};

export default Skills;

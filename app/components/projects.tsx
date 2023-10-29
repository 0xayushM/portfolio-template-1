import React from "react";
import projectsData from "../data/projectsData.json";
import Link from "next/link";
import {
  FaGithub,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import ToolTip from "./toolTip";

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="heading text-4xl">{projectsData.heading}</h1>
      <div className="scrollbar flex flex-col md:flex-row md:overflow-x-scroll flex-wrap md:flex-nowrap gap-5 w-[90%] sm:w-[80%] md:w-[70%]">
        {projectsData.data.map((project) => (
          <div className="project_card" key={project.id}>
            <h1 className="highlight text-lg font flex items-center justify-center pb-2">{project.name}</h1>
            <hr className="pt-2" />
            <div className="content text-[15px]">
              <div>
                <p className="p-5 flex items-center">
                  {project.description}
                </p>
              </div>
              <div className="links">
                <ToolTip section='projects' tooltip="Github">
                  <div>
                    {project.githubUrl && (
                      <Link className="link" target="_blank" href={project.githubUrl}>
                        <FaGithub />
                      </Link>
                    )}
                  </div>
                </ToolTip>
                <ToolTip section='projects' tooltip="Youtube">
                  <div >
                    {project.videoUrl && (
                      <Link className="link" target="_blank" href={project.videoUrl}>
                        <FaYoutube />
                      </Link>
                    )}
                  </div>
                </ToolTip>
                <ToolTip section='projects' tooltip="Live Site">
                  <div>
                    {project.deployedUrl && (
                      <Link className="link" target="_blank" href={project.deployedUrl}>
                        <FaGlobe />
                      </Link>
                    )}
                  </div>
                </ToolTip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

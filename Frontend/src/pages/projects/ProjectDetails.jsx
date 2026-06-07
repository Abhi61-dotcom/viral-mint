import React from "react";
import { useParams } from "react-router-dom";


import Urbanwear from "../projects/UrbanWearCaseStudy";
import UrbanWearCaseStudy from "../projects/UrbanWearCaseStudy";

const projects = [
  {
    title: "Urban Wear's",
    slug: "urbanwear",
    description: "Urban Wear full project details...",
  },
  {
    title: "Radisson Blu Hotels & Resorts",
    slug: "radisson-blu",
    description: "Radisson project details...",
  },
  {
    title: "ROG – Republic of Gamers (ASUS)",
    slug: "asus-rog",
    description: "ASUS ROG project details...",
  },
  {
    title: "CAE Simulation Training Pvt. Ltd.",
    slug: "cae-simulation",
    description: "CAE project details...",
  },
  {
    title: "SAME – School for Aircraft Maintenance Engineering",
    slug: "same-ame",
    description: "SAME project details...",
  },
  {
    title: "Casa Decor",
    slug: "casa-decor",
    description: "Casa Decor project details...",
  },
];

const ProjectDetails = () => {
  const { slug } = useParams();

  
  const projectPages = {
    urbanwear: <UrbanWearCaseStudy/>,
  };

 
  if (projectPages[slug]) {
    return projectPages[slug];
  }

 
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1 className="p-10 text-xl">Project not found 😢</h1>;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
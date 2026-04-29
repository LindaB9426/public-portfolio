import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Diamond homepage",
    description:
      "This is exercise what i made in Coursera courses. I use HTML and CSS",
    getImageSrc: () => require("../images/diamond.png"),
    links: [
      { label: "GitHub", url: "https://github.com/LindaB9426/Homepage-exercise"},
      { label: "Live page", url: "https://lindab9426.github.io/Homepage-exercise/index.html"}
    ]
  },
  {
    title: "Caffe",
    description:
      "Project by courses. Caffe app in figma",
    getImageSrc: () => require("../images/caffe.png"),
    links: [
      { label: "Figma", url: "https://www.figma.com/design/LO42Rhbi5eZH7hoT9N49Rk/Untitled?node-id=1-201&t=U5oToIuZukxmWcUW-0"}
    ]
  },
  {
    title: "Little Lemon",
    description:
      "One more exercise from courses. Little Lemon restaurant app.",
    getImageSrc: () => require("../images/lemon.png"),
    links: [
      { label: "Figma", url: "https://www.figma.com/proto/UgssHaeQSx5MyjfmaPm4zr/Prototype?node-id=1-50&p=f&t=CH56xX3bhochWURG-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"}
    ]
  },
  {
    title: "Little Lemon homepage",
    description:
      "This is exercise what i made in Coursera courses. I use HTML and CSS",
    getImageSrc: () => require("../images/lemonpage.png"),
    links: [
      { label: "GitHub", url: "https://github.com/LindaB9426/Little-Lemon.git"},
      { label: "Live page", url: "https://lindab9426.github.io/Little-Lemon/"}
    ]
  }

];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      alignItems="flex-start"
      isDarkBackground
      p={8}
      spacing={8}
      
    >
      <Heading as="h1" id="projects-section" scrollMarginTop="80px" p={4}>
        Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            links={project.links}         
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

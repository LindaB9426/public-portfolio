import React from "react";
import { Text, Heading, VStack, HStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";



const AboutSection = () => (
   <FullScreenSection
    justifyContent="center"
    alignItems="center"
    id="about-section" 
    scrollMarginTop="80px"
    isDarkBackground
    p={10}
    spacing={8}

  >
    <HStack spacing={10} w="100%" justify="center" align="flex-start" >
        <VStack spacing={6} boxShadow="0 0 60px rgba(106, 106, 106, 0.4)">
            <Heading as='h1' size='xl'>
                About me
            </Heading> 
            <Image src="/images/avatar2.jpg" w="80%"  borderRadius={10}>
            </Image>
                   
            <Text fontSize="sm" textAlign="center" maxW="600px">
                I am an aspiring front-end developer with a strong interest in creating user-friendly and visually appealing web solutions. 
                I have earned a front-end development certificate and continue to learn independently while working with React, JavaScript, HTML, CSS, as well as Git and GitHub. 
                I am particularly passionate about how ideas transform into functional and aesthetically pleasing web applications.
            </Text> 
            <Text>
                babre.linda@gmail.com
            </Text>
        </VStack>
        <VStack spacing={6} boxShadow="0 0 60px rgba(106, 106, 106, 0.4)">
            <Heading as="h1" size="xl">
              Courses
            </Heading>
            <Image src="/images/courses.png" alt="certificate"  w="50%" borderRadius={10}>
            </Image>
            <Text fontSize="sm" textAlign="center" maxW="600px">
                Meta Front-End Developer Professional Certificate (Coursera) – 
                developed practical front-end development skills using HTML, CSS, JavaScript, and React, with hands-on experience in Git/GitHub. 
                Built responsive web applications and completed real-world projects showcasing problem-solving and UI development abilities.
            </Text>
        </VStack>
    </HStack>    
  </FullScreenSection>
);


export default AboutSection;
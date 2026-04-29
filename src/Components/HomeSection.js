import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const HomeSection = () => (
   <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    minH="100vh"
    pt="120px"
    id="home-section" 
    scrollMarginTop="80px"

  >
    <VStack spacing={6} textAlign="center" >
        <Avatar src="/public/avatar.jpg" boxSize="20em" boxShadow="0 0 60px rgba(106, 106, 106, 0.4)" />
        <Heading as='h1' size='xl'>
            Hi, I'm Linda
        </Heading>        
        <Heading as='h2' size='md'>
            Junior Front-end Developer
        </Heading>
    </VStack>
  </FullScreenSection>
);


export default HomeSection;
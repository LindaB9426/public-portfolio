import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      
      color={isDarkBackground ? "white" : "black"}
      {...boxProps} 
    >
      <VStack maxWidth="1280px" minHeight="100vh" w="100%" mx="auto">
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;

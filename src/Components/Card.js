import { Heading, HStack, Image, Text, VStack, Stack, Link, Box, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({ title, description, imageSrc, links = [] }) => {
  
  return (
      <Box
        align="start"
        spacing={5}
        bg="white"
        borderRadius="md"
        overflow="hidden"
        maxW={400}
        backgroundColor="#A0A0A0"
        
        cursor="pointer"
        _hover={{ transform: "scale(1.03)" }}
          transition="0.2s"
      >
      
        <Image src={imageSrc} alt={title} h="15rem" w="100%"/>

        <VStack align="start" spacing={2} p={4} h={200}>
          <Heading as="h2" fontSize="xl" color="black">
            {title}
          </Heading>
          <Text fontSize="sm" color="black">
            {description}
          </Text>
           <HStack spacing={3} mt="auto" wrap="wrap">
             {links.map((link, index) => (
                <Button
                  key={index}
                  size="sm"
                  color="white"
                  bgColor="black"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {link.label}
                  
                </Button>
              ))}
          </HStack>
        </VStack>
      </Box>
  );
      
   
};
    


export default Card;
import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bgGradient="linear(to-b, #090909, #353535, #858585)">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={20}
          flexDirection="column"
        >
          <p>Linda • © 2026</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
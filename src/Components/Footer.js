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
          height={20} // nedaudz augstāks, lai telpa counter
          flexDirection="column" // lai counter parādās zem teksta
        >
          <p>Linda • © 2026</p>
          <img
            src="https://komarev.com/ghpvc/?username=LindaB9426&label=Page%20views&color=0e75b6&style=flat"
            alt="Page views"
            style={{ marginTop: "4px" }}
          />
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
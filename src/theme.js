import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Outfit', sans-serif",
  },

  colors: {
    brand: {
        900: "#0B0B0F",
        800: "#141414",
        700: "#1F1F1F",
        600: "#2A2A2A",
        500: "#3A3A3A",
        400: "#6B6B6B",
        300: "#A0A0A0",
        200: "#D0D0D0",
        100: "#E8E8E8",
        50: "#FFFFFF",
    },
    dark: {
      bg: "#0B0B0F",
      surface: "#141420",
    },
  },

  styles: {
    global: {
      body: {
        fontFamily: "'Space Grotesk', sans-serif",
        bg: "dark.bg",
        color: "whiteAlpha.900",
      },
    },
  },

  components: {
    Heading: {
      baseStyle: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: "600",
      },
    },

    Text: {
      baseStyle: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "16px",
        color: "whiteAlpha.800",
      },
    },
  },
});

export default theme;
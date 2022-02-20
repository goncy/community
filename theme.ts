import {extendTheme, theme} from "@chakra-ui/react";

import backgroundImage from "./public/bg.jpg";

export default extendTheme({
  styles: {
    global: {
      "html, body, #__next": {
        minHeight: "100vh",
      },
      body: {
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
      },
      "#__next": {
        backdropFilter: `blur(24px) brightness(70%) grayscale(10%)`,
      },
    },
  },
  colors: {
    primary: theme.colors.purple,
    secondary: theme.colors.green,
  },
  textStyles: {
    soft: {
      color: "blackAlpha.800",
      ".chakra-ui-dark &": {
        color: "whiteAlpha.800",
      },
    },
    link: {
      "&": {
        color: "primary.500",
      },
      ".chakra-ui-dark &": {
        color: "primary.400",
      },
    },
  },
  layerStyles: {
    card: {
      backgroundColor: "white",
      ".chakra-ui-dark &": {
        backgroundColor: "gray.800",
      },
    },
  },
});

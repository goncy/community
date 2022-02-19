import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body, #__next": {
        height: "100%",
        backgroundColor: "black",
      },
    },
  },
  colors: {
    primary: theme.colors.purple,
    secondary: theme.colors.green,
  },
  textStyles: {
    soft: {
      color: "blackAlpha.700",
      ".chakra-ui-dark &": {
        color: "whiteAlpha.700",
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

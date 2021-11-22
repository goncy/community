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
  },
});

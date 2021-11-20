import type {AppProps} from "next/app";

import {ChakraProvider, Box, Flex} from "@chakra-ui/react";

import backgroundImage from "../public/bg.jpg";
import theme from "../theme";

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box backgroundImage={backgroundImage.src} backgroundSize="cover" minHeight="100vh">
        <Flex
          alignItems="center"
          backdropFilter="blur(24px) brightness(70%) grayscale(10%)"
          justifyContent="center"
          minHeight="100vh"
        >
          <Box marginY="auto">
            <Component {...pageProps} />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
export default App;

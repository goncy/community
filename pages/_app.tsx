import * as React from "react";
import Head from "next/head";
import {
  ChakraProvider,
  Heading,
  Text,
  Container,
  Stack,
  Link,
  StackDivider,
  useColorMode,
  Box,
  Flex,
} from "@chakra-ui/react";
import {AppProps} from "next/app";

import theme from "../theme";
import Image from "../ui/display/Image";
import TwitterIcon from "../ui/icons/Twitter";
import TwitchIcon from "../ui/icons/Twitch";
import YoutubeIcon from "../ui/icons/Youtube";
import MoonIcon from "../ui/icons/Moon";
import SunIcon from "../ui/icons/Sun";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <>
      <Head>
        <title>Communcy</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Start meta tags */}
        <meta content="goncy" name="author" />
        <meta content="Gonzalo Pozzo" name="copyright" />
        <meta
          content="Communcy es un portal de descubrimiento sobre gente de la comunidad, con información y tips para gente que está en la búsqueda laboral o perfiles para empresas que buscan nuevos candidatos"
          name="description"
        />
        <meta content="purple" name="theme-color" />
        <meta content="trabajo,frontend,backend,trainee,junior,semisenior,senior" name="keywords" />
        {/* End meta tags */}
      </Head>
      <Stack
        _dark={{
          borderColor: "whiteAlpha.300",
        }}
        as={Container}
        borderColor="blackAlpha.700"
        borderWidth={1}
        boxShadow="sm"
        height="100%"
        layerStyle="card"
        maxWidth="container.xl"
        minHeight="100vh"
        padding={0}
        spacing={0}
      >
        <Stack divider={<StackDivider />} flex={1} height="100%" spacing={0}>
          <Stack alignItems="center" padding={6} spacing={2} textAlign="center">
            <Stack
              alignItems="baseline"
              aria-label="Cambiar modo de color"
              cursor="pointer"
              direction="row"
              fontSize={{base: 20, md: 24}}
              role="button"
              spacing={2}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              <Heading>Communcy</Heading>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Stack>
            <Text textStyle="soft">Portal de descubrimiento sobre gente de la comunidad</Text>
          </Stack>
          <Flex direction="column" flex={1} height="100%" marginY="auto" minHeight="100%">
            <Component {...pageProps} />
          </Flex>
        </Stack>
        {/* Start Footer */}
        <Stack borderTopWidth={1} divider={<StackDivider />} spacing={0}>
          <Stack direction={{base: "column-reverse", md: "row"}} padding={6} spacing={6}>
            <Box
              minHeight={{base: 512, md: 128}}
              minWidth={{base: "100%", md: 36}}
              position="relative"
            >
              <Image
                alt="Gonzalo Pozzo parado con un micrófono"
                borderRadius="sm"
                layout="fill"
                objectFit="cover"
                src="/avatar.jpg"
              />
            </Box>
            <Stack spacing={2}>
              <Heading fontWeight="normal">
                ¡Hola! Soy <b>Goncy</b>.
              </Heading>
              <Stack spacing={6}>
                <Text>
                  Soy frontend developer, actualmente trabajando en <b>Vercel</b>, también me gusta
                  generar contenido en <b>twitter</b>, <b>youtube</b> y <b>twitch</b>. Esta
                  aplicación ayuda a la gente de la comunidad a obtener más visibilidad y tracción
                  sobre sus perfiles, potenciandolos para conseguir su primer o un mejor trabajo en
                  el rubro. También incluye testimonios y tips de personas que encontraron trabajo y
                  les puede servir a otros. Contratar gente de la comunidad es un gran beneficio a
                  empresas ya que obtienen visibilidad, reduce el tiempo de sourcing y los
                  candidatos suelen compartir sus proyectos y conocimientos de manera pública
                  facilitando la evaluación 🙌
                </Text>
                <Stack
                  direction="row"
                  justifyContent={{base: "center", md: "flex-start"}}
                  spacing={3}
                >
                  <Link
                    isExternal
                    alignItems="center"
                    backgroundColor="primary.500"
                    borderRadius={9999}
                    color="white"
                    display="flex"
                    height={8}
                    href="https://twitter.gonzalopozzo.com"
                    justifyContent="center"
                    padding={1.5}
                    rel="noopener"
                    title="twitter"
                    width={8}
                  >
                    <TwitterIcon />
                  </Link>
                  <Link
                    isExternal
                    alignItems="center"
                    backgroundColor="primary.500"
                    borderRadius={9999}
                    color="white"
                    display="flex"
                    height={8}
                    href="https://twitch.gonzalopozzo.com"
                    justifyContent="center"
                    padding={1.5}
                    rel="noopener"
                    title="twitch"
                    width={8}
                  >
                    <TwitchIcon />
                  </Link>
                  <Link
                    isExternal
                    alignItems="center"
                    backgroundColor="primary.500"
                    borderRadius={9999}
                    color="white"
                    display="flex"
                    height={8}
                    href="https://youtube.gonzalopozzo.com"
                    justifyContent="center"
                    padding={1.5}
                    rel="noopener"
                    title="youtube"
                    width={8}
                  >
                    <YoutubeIcon />
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Text padding={6} textAlign="center" textStyle="soft">
            ¿Querés que tu perfil aparezca acá? Hacé tu pull request en{" "}
            <Link isExternal href="https://github.com/goncy/community" textStyle="link">
              el repositorio de <b>Communcy</b>
            </Link>
            .
          </Text>
        </Stack>
        {/* End Footer */}
      </Stack>
    </>
  );
};

function AppContainer(props: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <App {...props} />
    </ChakraProvider>
  );
}

export default AppContainer;

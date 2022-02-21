import React from "react";
import Head from "next/head";
import {Container, Text} from "@chakra-ui/react";

import Link from "../ui/controls/Link";

const NotFoundPage: React.VFC = () => {
  return (
    <>
      <Head>
        <title>Communcy | not found</title>
        <meta content="Goncy community featured profiles" name="description" />
        <meta content="Communcy | not found" name="title" />
      </Head>
      <Container maxWidth="container.md" paddingY={6}>
        <Text borderRadius="lg" layerStyle="card" padding={6} textStyle="soft"
        >
          This profile was not found, you can go to the{" "}
          <Link color="primary.500" href="/">
            index page
          </Link>{" "}
          to see a list of all the profiles or you can propose this profile on the{" "}
          <Link isExternal color="primary.500" href="https://discord.gonzalopozzo.com">
            discord server
          </Link>
          .
        </Text>
      </Container>
    </>
  );
};

export default NotFoundPage;

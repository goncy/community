import React from "react";
import Head from "next/head";
import {Text} from "@chakra-ui/react";

import Link from "../ui/controls/Link";

const NotFoundPage: React.VFC = () => {
  return (
    <>
      <Head>
        <title>Communcy | 404</title>
        <meta content="Communcy | 404" name="title" />
      </Head>
      <Text fontSize="xl" margin="auto" padding={6} textAlign="center" textStyle="soft">
        Este perfil no existe, podes ver los perfiles disponibles en la{" "}
        <Link href="/" textStyle="link">
          página principal
        </Link>
        .
      </Text>
    </>
  );
};

export default NotFoundPage;

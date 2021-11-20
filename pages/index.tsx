import type {NextPage, GetStaticProps} from "next";
import type {User} from "../types";

import Head from "next/head";
import {Container, StackDivider, Stack, Heading, Text} from "@chakra-ui/react";

import Image from "../ui/display/Image";
import Link from "../ui/controls/Link";
import api from "../api";
interface Props {
  users: User[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const users = await api.user.list();

  return {
    props: {
      users,
    },
  };
};

const HomePage: NextPage<Props> = ({users}) => {
  return (
    <>
      <Head>
        <title>Comuncy</title>
        <meta content="Goncy community featured profiles" name="description" />
        <meta content="Comuncy" name="title" />
      </Head>
      <Container maxWidth="container.md" paddingY={4}>
        <Stack
          backgroundColor="white"
          borderBottomRadius="xl"
          borderTopRadius="lg"
          divider={<StackDivider />}
          filter="drop-shadow(0px 0px 12px black)"
          padding={4}
          spacing={4}
        >
          {users.map((user) => (
            <Link key={user.id} href={`/${user.id}`}>
              <Stack direction="row" spacing={3}>
                <Image
                  alt={user.name}
                  borderRadius={9999}
                  boxShadow="md"
                  flexShrink={0}
                  height={64}
                  layout="fixed"
                  src={user.avatar}
                  width={64}
                />
                <Stack spacing={1}>
                  <Heading fontSize="lg">{user.name}</Heading>
                  <Text fontSize="sm" noOfLines={2}>
                    {user.bio}
                  </Text>
                </Stack>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;

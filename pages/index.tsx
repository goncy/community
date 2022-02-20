import type {NextPage, GetStaticProps} from "next";
import type {User} from "../types";

import Head from "next/head";
import {
  StackDivider,
  Stack,
  LinkBox,
  Text,
  LinkOverlay,
  WrapItem,
  Badge,
  Wrap,
  Box,
} from "@chakra-ui/react";

import api from "../api";
import Image from "../ui/display/Image";

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
        <title>Communcy</title>
        <meta content="Goncy community featured profiles" name="description" />
        <meta content="Communcy" name="title" />
      </Head>
      <Stack borderBottomWidth={1} borderRadius="sm" divider={<StackDivider />} spacing={0}>
        {users.map((user) => (
          <LinkBox key={user.id}>
            <Box key={user.id} as={Box} id={user.id} padding={6}>
              <Stack spacing={{base: 3, md: 2}}>
                <Stack alignItems="flex-start" direction="row" spacing={2}>
                  {user.avatar && (
                    <Image
                      alt={`${user.company} logo`}
                      aria-label={`${user.company} logo`}
                      borderRadius="sm"
                      height={48}
                      loading="lazy"
                      minWidth={48}
                      objectFit="contain"
                      src={user.avatar}
                      width={48}
                    />
                  )}
                  <Stack spacing={0}>
                    <LinkOverlay
                      aria-label={user.name}
                      fontSize={{base: "xl", md: "lg"}}
                      fontWeight="500"
                      href={`/${user.id}`}
                      lineHeight="normal"
                    >
                      {user.name}
                    </LinkOverlay>
                    <Text fontSize={{base: "md", md: "sm"}} lineHeight="normal" textStyle="soft">
                      {user.position} {user.company && ` · ${user.company}`}
                    </Text>
                  </Stack>
                </Stack>
                <Wrap data-testid="tags">
                  {Boolean(user.technologies?.length) &&
                    user.technologies?.map((tag) => (
                      <WrapItem key={tag}>
                        <Badge colorScheme="secondary" fontSize={{base: 12, md: 11}}>
                          {tag}
                        </Badge>
                      </WrapItem>
                    ))}
                </Wrap>
                {user.bio && (
                  <Text fontSize="md" name={user.name} role="article" textStyle="soft">
                    {user.bio}
                  </Text>
                )}
              </Stack>
            </Box>
          </LinkBox>
        ))}
      </Stack>
    </>
  );
};

export default HomePage;

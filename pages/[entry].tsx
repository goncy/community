import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import type {Entry} from "../types";

import {ParsedUrlQuery} from "querystring";

import Head from "next/head";
import {Stack, Heading, Box, Text, IconButton, Wrap, WrapItem, Badge} from "@chakra-ui/react";

import api from "../api";
import Markdown from "../ui/display/Markdown";
import Image from "../ui/display/Image";
import Link from "../ui/controls/Link";
import githubIcon from "../public/icons/github.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import twitterIcon from "../public/icons/twitter.svg";
import globeIcon from "../public/icons/globe.svg";

interface Props {
  entry: Entry;
}

interface Params extends ParsedUrlQuery {
  entry: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  const entry = await api.entry.fetch(params?.entry as string);

  if (!entry) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      entry,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const users = await api.user.list();

  return {
    paths: users.map((user) => ({
      params: {
        entry: user.id,
      },
    })),
    fallback: "blocking",
  };
};

const EntryPage: NextPage<Props> = ({entry}) => {
  return (
    <>
      <Head>
        <title>Communcy | {entry.user.name}</title>
        <meta content={entry.user.bio} name="description" />
        <meta content={`Communcy | ${entry.user.name}`} name="title" />
      </Head>
      <Stack flex={1} spacing={-6}>
        <Stack
          alignItems={{base: "center", md: "unset"}}
          direction={{base: "column-reverse", md: "row"}}
          justifyContent="space-between"
          padding={6}
          paddingBottom={0}
          spacing={6}
          zIndex={1}
        >
          <Stack justifyContent="space-between" spacing={6}>
            <Stack spacing={3} textAlign={{base: "center", md: "left"}}>
              <Stack spacing={0}>
                <Heading fontSize="3xl">{entry.user.name}</Heading>
                <Text fontSize={{base: "lg", md: "md"}} lineHeight="normal" textStyle="soft">
                  {entry.user.position} {entry.user.company && ` · ${entry.user.company}`}
                </Text>
              </Stack>
              <Wrap data-testid="tags" justify={{base: "center", md: "left"}}>
                {Boolean(entry.user.technologies?.length) &&
                  entry.user.technologies?.map((tag) => (
                    <WrapItem key={tag}>
                      <Badge colorScheme="secondary" fontSize={{base: 12, md: 11}}>
                        {tag}
                      </Badge>
                    </WrapItem>
                  ))}
              </Wrap>
              <Text
                _dark={{color: "primary.100"}}
                color="primary.600"
                fontSize={{base: "lg", md: "md"}}
              >
                {entry.user.bio}
              </Text>
            </Stack>
            <Stack direction="row" justifyContent={{base: "center", md: "flex-start"}}>
              {entry.user.github && (
                <Link isExternal href={`https://github.com/${entry.user.github}`}>
                  <IconButton
                    isRound
                    _hover={{backgroundColor: "primary.400"}}
                    aria-label="icon"
                    backgroundColor="primary.500"
                    colorScheme="default"
                    height={12}
                    icon={
                      <Image alt="icon" height={36} layout="fixed" src={githubIcon} width={36} />
                    }
                    width={12}
                  />
                </Link>
              )}
              {entry.user.linkedin && (
                <Link isExternal href={`https://linkedin.com/in/${entry.user.linkedin}`}>
                  <IconButton
                    isRound
                    _hover={{backgroundColor: "primary.400"}}
                    aria-label="icon"
                    backgroundColor="primary.500"
                    colorScheme="default"
                    height={12}
                    icon={
                      <Image alt="icon" height={30} layout="fixed" src={linkedinIcon} width={30} />
                    }
                    width={12}
                  />
                </Link>
              )}
              {entry.user.twitter && (
                <Link isExternal href={`https://twitter.com/${entry.user.twitter}`}>
                  <IconButton
                    isRound
                    _hover={{backgroundColor: "primary.400"}}
                    aria-label="icon"
                    backgroundColor="primary.500"
                    colorScheme="default"
                    height={12}
                    icon={
                      <Image alt="icon" height={31} layout="fixed" src={twitterIcon} width={31} />
                    }
                    width={12}
                  />
                </Link>
              )}
              {entry.user.website && (
                <Link isExternal href={entry.user.website}>
                  <IconButton
                    isRound
                    _hover={{backgroundColor: "primary.400"}}
                    aria-label="icon"
                    backgroundColor="primary.500"
                    colorScheme="default"
                    height={12}
                    icon={
                      <Image alt="icon" height={31} layout="fixed" src={globeIcon} width={31} />
                    }
                    width={12}
                  />
                </Link>
              )}
            </Stack>
          </Stack>
          <Box
            borderRadius="lg"
            boxShadow="0 0 8px rgba(0, 0, 0, 20%)"
            height={256}
            position="relative"
            width={256}
          >
            <Box
              borderColor="white"
              borderRadius={9999}
              borderWidth={2}
              position="absolute"
              right={2}
              top={2}
              zIndex={1}
            >
              <Image
                alt={entry.user.country}
                borderColor="white"
                borderRadius={9999}
                height={36}
                layout="fixed"
                src={`/flags/${entry.user.country}.svg`}
                width={36}
              />
            </Box>
            <Image
              alt={entry.user.name}
              borderRadius="lg"
              height={256}
              layout="fixed"
              objectFit="cover"
              src={entry.user.avatar}
              width={256}
            />
          </Box>
        </Stack>
        <Stack
          backgroundColor="primary.900"
          color="primary.100"
          flex={1}
          padding={6}
          paddingTop={12}
          spacing={6}
        >
          <Stack marginBottom={6} spacing={6}>
            {entry.user.testimonial && (
              <Box
                backgroundColor="primary.500"
                borderRadius="md"
                marginTop={4}
                padding={4}
                position="relative"
              >
                <Box boxShadow="lg" left={-4} position="absolute" top={-4}>
                  <Image
                    alt="goncy"
                    borderRadius={9999}
                    height={32}
                    layout="fixed"
                    src="/avatars/goncy.jpg"
                    width={32}
                  />
                </Box>
                <Text color="primary.50">{entry.user.testimonial}</Text>
              </Box>
            )}
            <Box>
              <Markdown>{entry.content}</Markdown>
            </Box>
          </Stack>
          <Box
            borderTopColor="primary.500"
            borderTopWidth={1}
            paddingTop={6}
            style={{marginTop: "auto"}}
          >
            <Link href="/">Volver al inicio</Link>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default EntryPage;

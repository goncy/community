import React from "react";
import {ListItem, UnorderedList, Heading, Stack} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  children: string;
}

const components = {
  h1: Heading,
  h3: (props: any) => <Heading fontSize="2xl" {...props} />,
  ul: UnorderedList,
  li: (props: any) => <ListItem listStyleType="none" {...props} />,
};

const Markdown: React.VFC<Props> = ({children}) => {
  return (
    <Stack spacing={6}>
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </Stack>
  );
};

export default Markdown;

import NextLink from "next/link";
import {Link as ChakraLink, LinkProps} from "@chakra-ui/react";

interface Props extends LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.VFC<Props> = ({href, children, ...props}) => {
  return (
    <NextLink passHref href={href}>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  );
};

export default Link;

import * as React from "react";
import NextImage, {ImageProps as NextImageProps} from "next/image";
import {Box, chakra, ImageProps as ChakraImageProps} from "@chakra-ui/react";

type Props = ChakraImageProps & NextImageProps;

const Factory = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "width",
      "height",
      "layout",
      "blurDataURL",
      "aria-label",
      "alt",
      "onLoadingComplete",
      "placeholder",
    ].includes(prop),
});

function Image(props: Props): JSX.Element {
  const [isLoading, toggleLoading] = React.useState(true);

  return (
    <Box
      borderRadius={props.borderRadius}
      height={`${props.height}px`}
      overflow="hidden"
      width={`${props.width}px`}
    >
      <Factory
        {...props}
        filter={isLoading ? "grayscale(1) blur(12px)" : "grayscale(0) blur(0)"}
        transition="filter .5s"
        onLoadingComplete={() => toggleLoading(false)}
      />
    </Box>
  );
}

export default Image;

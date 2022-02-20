import React from "react";
import {Box, BoxProps} from "@chakra-ui/react";

function SunIcon(props: BoxProps): JSX.Element {
  return (
    <Box {...props}>
      <svg
        className="chakra-icon css-onkibi"
        focusable="false"
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2" />
          <path d="M12 21v2" />
          <path d="M4.22 4.22l1.42 1.42" />
          <path d="M18.36 18.36l1.42 1.42" />
          <path d="M1 12h2" />
          <path d="M21 12h2" />
          <path d="M4.22 19.78l1.42-1.42" />
          <path d="M18.36 5.64l1.42-1.42" />
        </g>
      </svg>
    </Box>
  );
}

export default SunIcon;

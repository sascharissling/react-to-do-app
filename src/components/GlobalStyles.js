import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Source Sans Pro", sans-serif;
        }
        body {
          background: ${theme.backdrop};
        }
      `}
    />
  );
}

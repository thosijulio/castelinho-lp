import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Copyduck, sans-serif", // Usado para cabeçalhos
  },
  breakpoints: {
    sm: "280px",
    md: "300px",
    lg: "330px",
    xl: "400px",
    "2xl": "768px",
    "4xl": "1536px",
  },
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        backgroundColor: "#f3f3f3",
        color: "#7e7d95",
        margin: 0,
      },
    },
  },
});

export default theme;

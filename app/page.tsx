"use client";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  return (
    <Flex
      align="center"
      direction="column"
      maxWidth="100dvw"
      minHeight="100dvh"
      minWidth="100dvw"
      overflow="hidden"
      textAlign="center"
    >
      <Header />
      <Flex marginTop={["50px"]} width="100%">
        <ImageCarousel />
      </Flex>
    </Flex>
  );
}

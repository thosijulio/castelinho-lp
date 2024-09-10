"use client";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import WhatsappButton from "./components/WhatsappButton";

export default function Home() {
  return (
    <Flex
      align="center"
      direction="column"
      maxWidth="100dvw"
      minHeight="100dvh"
      minWidth="100dvw"
      textAlign="center"
      position="relative"
    >
      <Header />
      <Banner />
      <AboutUs />
      <WhatsappButton />
    </Flex>
  );
}

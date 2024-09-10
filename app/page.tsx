"use client";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import WhatsappButton from "./components/WhatsappButton";
import OurProgrames from "./components/OurProgrames";

export default function Home() {
  return (
    <Flex
      align="center"
      direction="column"
      maxWidth="50vw !important"
      minHeight="100dvh"
      minWidth="100%"
      textAlign="center"
      overflowX="hidden"
      position="relative"
    >
      <Header />
      <Banner />
      <AboutUs />
      <OurProgrames />
      <WhatsappButton />
    </Flex>
  );
}

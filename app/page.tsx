"use client";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import WhatsappButton from "./components/WhatsappButton";
import OurProgrames from "./components/OurProgrames";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Gallery from "./components/Gallery";

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
      <WhyChooseUs />
      <Testimonials />
      <Location />
      <Gallery />
      <WhatsappButton />
    </Flex>
  );
}

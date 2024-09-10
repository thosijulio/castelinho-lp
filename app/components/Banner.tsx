import { Flex } from "@chakra-ui/react";

import AnimatedText from "./AnimatedText";

const Banner = () => {
  return (
    <Flex
      alignItems="center"
      background="linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(/images/banner.jpeg)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      flexDirection="column"
      fontFamily="Copyduck"
      fontSize={["24px", "60px"]}
      height={["200px", "600px"]}
      justifyContent="center"
      overflowX="hidden"
      width={["100%"]}
    >
      <AnimatedText text={"Castelinho do Saber"} />
    </Flex>
  );
};

export default Banner;

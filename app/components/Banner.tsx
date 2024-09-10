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
      fontSize={["20px", "24px", "26px", "28px", "48px", "60px"]}
      height={["200px", "600px"]}
      justifyContent="center"
      overflowX="hidden"
      width={["100%"]}
    >
      <Flex width={["270px", "290px", "300px", "320px", "390px", "auto"]}>
        <AnimatedText text={"Castelinho do Saber"} />
      </Flex>
    </Flex>
  );
};

export default Banner;

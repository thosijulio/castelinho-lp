import { Flex, Text } from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel";

const Gallery = () => {
  return (
    <Flex
      align="center"
      direction="column"
      gap={["40px"]}
      justify="center"
      marginBottom={["40px"]}
      width={["100%"]}
    >
      <Flex
        align="center"
        bgColor="#F17398"
        borderBottomLeftRadius="100%"
        borderBottomRightRadius="200%"
        height={["100px"]}
        justify="center"
        width="100%"
      >
        <Text
          color="white"
          fontSize="28px"
          fontWeight={800}
          textTransform="uppercase"
        >
          Galeria
        </Text>
      </Flex>
      {/* <ImageCarousel /> */}
    </Flex>
  );
};

export default Gallery;

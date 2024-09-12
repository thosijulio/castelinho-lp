import { Flex, Text, Image } from "@chakra-ui/react";
import getWhyChooseUs from "../api/getWhyChooseUs";

const WhyChooseUs = () => {
  const reasons = getWhyChooseUs();
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
          O que torna nossa escola especial
        </Text>
      </Flex>
      <Flex align="" gap={["30px 40px"]} justify="center" wrap="wrap">
        {reasons.map((reason, index) => (
          <Flex align="" gap="15px 15px" key={index} width={["450px"]}>
            <Image
              alignSelf={"flex-start"}
              src={reason.image}
              height="auto"
              width={["80px"]}
              alt={reason.title}
            />
            <Flex direction="column" textAlign="left">
              <Text fontSize={["20px"]} fontWeight={600}>
                {reason.title}
              </Text>
              <Text>{reason.description}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default WhyChooseUs;

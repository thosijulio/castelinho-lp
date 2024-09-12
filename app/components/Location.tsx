import { Flex, Text } from "@chakra-ui/react";

const Location = () => {
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
          Localização
        </Text>
      </Flex>
      <Flex
        align="center"
        gap={["20px"]}
        justify="center"
        wrap="wrap"
        width="100%"
      >
        <Flex height={["450px"]} width={["600px"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14761.448180561156!2d-49.090614!3d-22.3399545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf66f83643932b%3A0x4e813ab395447c49!2sCastelinho%20do%20Saber%20Educa%C3%A7%C3%A3o%20Infantil!5e0!3m2!1sen!2sbr!4v1726101774069!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Location;

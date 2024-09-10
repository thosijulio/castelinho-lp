import { Flex, Text } from "@chakra-ui/react";
import getProgrames from "../api/getProgrames";

const OurProgrames = () => {
  const programes = getProgrames();

  return (
    <Flex
      align="center"
      direction="column"
      marginTop={["30px"]}
      overflow="hidden"
      width="100%"
    >
      <Flex
        align="center"
        bgColor="#ffd8a6"
        borderTopLeftRadius="100%"
        borderTopRightRadius="200%"
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
          Nossas Turmas
        </Text>
      </Flex>
      <Flex
        align="center"
        bgColor="#fff4e7"
        direction="row"
        gap={["25px 5px"]}
        justify="center"
        padding={["20px"]}
        wrap="wrap"
        width="100%"
      >
        {programes.map((programe, index) => (
          <Flex
            align="center"
            background={programe.background}
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            color="white"
            direction="column"
            justify="center"
            key={index}
            padding={["30px 22px 40px 22px"]}
            width={["280px"]}
          >
            <Text
              fontFamily="Copyduck"
              fontSize={["28px"]}
              textTransform="uppercase"
            >
              {programe.name}
            </Text>
            <Flex
              backgroundRepeat="no-repeat"
              backgroundImage={programe.image}
              backgroundSize="cover"
              backgroundPosition="center"
              borderTopRightRadius="70px"
              borderBottomRightRadius="20px"
              borderTopLeftRadius="30px"
              borderBottomLeftRadius="60px"
              height={["140px"]}
              margin={["10px"]}
              width={["70%"]}
            />
            <Text color="white" fontSize="12px">
              {programe.description}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default OurProgrames;

import { Button, Flex, Image, Text } from "@chakra-ui/react";

import AnimatedText from "./AnimatedTitle";
import AnimatedTitle from "./AnimatedTitle";
import AnimatedSubtitle from "./AnimatedSubtitle";

const Banner = () => {
  const subtitles = [
    "Preparando os pequenos para grandes conquistas!",
    "Cuidando e educando com carinho desde os primeiros passos.",
    "Um lugar onde o aprendizado é brincadeira!",
    "Seu filho no caminho certo para um futuro brilhante.",
    "Desenvolvendo habilidades, construindo sonhos.",
  ];
  return (
    <Flex
      alignItems="center"
      background="linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(/images/banner.jpeg)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      flexDirection="column"
      color="white"
      fontSize={["20px"]}
      height={["200px", "600px"]}
      justifyContent="center"
      overflowX="hidden"
      width={["100%"]}
    >
      <Flex
        fontFamily="Copyduck"
        fontSize={["20px", "24px", "26px", "28px", "48px", "60px"]}
        width={["270px", "290px", "300px", "320px", "390px", "auto"]}
      >
        <AnimatedTitle text={"Castelinho do Saber"} />
      </Flex>
      <AnimatedSubtitle textArray={subtitles} />
      <Button
        backgroundColor="#F5804B"
        color="white"
        marginTop={["40px"]}
        _hover={{}}
      >
        Agende sua visita hoje
      </Button>
    </Flex>
  );
};

export default Banner;

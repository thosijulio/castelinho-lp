import { Flex, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Flex
      align="center"
      direction="column"
      gap={["40px"]}
      justify="center"
      overflow="hidden"
      width="100%"
    >
      <Flex
        align="center"
        bgColor="#c583fc"
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
          Sobre Nós
        </Text>
      </Flex>
      <Flex width={["80%"]}>
        <Text>
          A{" "}
          <span style={{ fontWeight: 800 }}>
            Escola de Educação Infantil Castelinho do Saber
          </span>{" "}
          foi fundada no ano de 2012. Mais de 5.000 alunos já concluíram a
          educação pré-escolar desde então. Nossa abordagem espontânea e
          adaptável, baseada em brincadeiras, deixa nossas crianças à vontade e
          os prepara para o ensino fundamental. Nosso currículo e avaliações
          provam que as crianças são bem versadas em seus conceitos sobre
          números e alfabetos. Estamos constantemente adaptando nossa abordagem
          de ensino para acompanhar o desenvolvimento contínuo e as mudanças de
          nossos alunos à medida que eles crescem.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutUs;

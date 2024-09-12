import { Flex, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import getTestimonials from "../api/getTestimonials";

const Testimonials = () => {
  const testimonials = getTestimonials();
  return (
    <Flex align="center" direction="column" justify="center" width={["100%"]}>
      <Flex
        align="center"
        bgColor="#9DD473"
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
          Depoimentos
        </Text>
      </Flex>
      <Flex
        align="center"
        backgroundColor="#FFF4E7"
        direction="column"
        gap={["60px"]}
        justify="center"
        padding={["20px"]}
        width={["100%"]}
      >
        <Flex align="center" gap={["20px"]} justify="center">
          <Flex
            backgroundColor="white"
            borderRadius="8px" // Bordas arredondadas
            boxShadow="0 8px 12px rgba(0, 0, 0, 0.5)" // Efeito de sombra suave
            direction="column"
            _hover={{ boxShadow: "0 8px 12px rgba(0, 0, 0, 0.7)" }} // Efeito de hover com sombra mais forte
            cursor="pointer" // Indica que a área é clicável
            onClick={() =>
              window.open(
                "https://www.google.com/search?q=castelinho+do+saber&sca_esv=708ca891a389fdf3&sca_upv=1&sxsrf=ADLYWIJRd1tViwJIjwGpw_N9NFKrtSWTJw%3A1726098958519&source=hp&ei=Di7iZorwHI7s1sQPqt6L8A4&iflsig=AL9hbdgAAAAAZuI8HoDXeZV3t74393BD2AcqJZTGyc45&oq=caste&gs_lp=Egdnd3Mtd2l6IgVjYXN0ZSoCCAAyChAjGIAEGCcYigUyCBAAGIAEGMsBMggQLhiABBjLATIIEC4YgAQYywEyCBAuGIAEGMsBMhEQLhiABBjHARjLARiOBRivATIKEAAYgAQYQxiKBTIOEC4YgAQYxwEYywEYrwEyCBAuGIAEGMsBMggQABiABBjLAUjgC1AAWOkDcAB4AJABAJgB5gGgAf8GqgEFMC40LjG4AQPIAQD4AQGYAgWgApUHwgILEC4YgAQY0QMYxwHCAgUQABiABMICBRAuGIAEwgIEECMYJ8ICEBAuGIAEGNEDGEMYxwEYigWYAwDiAwUSATEgQJIHBTAuNC4xoAfRPw&sclient=gws-wiz#lrd=0x94bf66f83643932b:0x4e813ab395447c49,1,,,,",
                "_blank"
              )
            }
            padding={["6px 25px"]}
          >
            <Text>(19 Avaliações) Google</Text>
            <Flex align="center" gap={["20px"]} justify="center">
              <Text color="#F8B479" fontSize={["32px"]} fontWeight={800}>
                5.0
              </Text>
              <Flex>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Flex key={index} width={["30px"]}>
                    <MdStar color="yellow" size="100%" />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex
            align="center"
            direction="column"
            fontSize={["28px"]}
            justify="center"
            wrap="wrap"
          >
            <Text fontSize={["20px"]}>Avaliações dos familiares sobre a</Text>
            <Text color="#C97BBB" fontWeight={800}>
              Castelinho do Saber
            </Text>
          </Flex>
        </Flex>
        <Flex gap={["20px"]} wrap="wrap">
          {testimonials.map((testimonial, index) => (
            <Flex
              backgroundColor="rgba(200, 200, 200, 0.3)"
              borderRadius={["15px"]}
              direction="column"
              gap={["10px"]}
              key={index}
              padding={["15px 20px"]}
              textAlign="left"
              width={["600px"]}
            >
              <Text color="#c97bbb" fontSize={["20px"]} fontWeight={800}>
                {testimonial.name}
              </Text>
              <Text>{testimonial.testimonial}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Testimonials;

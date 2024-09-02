import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <Flex
      align="center"
      as="header"
      bgColor="#3a3a3a"
      color="white"
      height={["50px"]}
      justify="space-between"
      padding={["0px 15px"]}
      position="fixed"
      width="100%"
    >
      <Flex position="relative" height={["50px"]} width={["50px"]}>
        <Image src="/logo.png" alt="logo" layout="fill" objectFit="contain" />
      </Flex>
      <Text fontSize={["12px"]}>Castelinho do Saber</Text>
      <MdMenu />
    </Flex>
  );
};

export default Header;

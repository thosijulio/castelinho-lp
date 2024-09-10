import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <Flex
      align="center"
      as="header"
      color="white"
      height={["50px"]}
      justify="space-between"
      padding={["30px 25px 0 25px"]}
      position="absolute"
      width="100%"
    >
      <Flex position="relative" height={["70px"]} width={["70px"]}>
        <Image src="/logo.png" alt="logo" layout="fill" objectFit="contain" />
      </Flex>
      <MdMenu />
    </Flex>
  );
};

export default Header;

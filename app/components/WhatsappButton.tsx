import { Flex } from "@chakra-ui/react";

const WhatsappButton = () => {
  const whatsappNumber = "14991399578"; // Substitua pelo número de telefone desejado no formato internacional
  const whatsappMessage = "Olá, gostaria de agendar uma visita!"; // Mensagem padrão opcional

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <Flex
        backgroundImage="url(/images/whatsappLogo.png)"
        backgroundSize="cover"
        height="50px"
        width="50px"
        position="absolute"
        bottom={5}
        right={5}
        cursor="pointer" // Adiciona um cursor de ponteiro para indicar que o elemento é clicável
      />
    </a>
  );
};

export default WhatsappButton;

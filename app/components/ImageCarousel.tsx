import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import './imageCarousel.css'

const ImageCarousel = () => {
  const settings = {
    dots: true, // Mostra os indicadores
    infinite: true, // Permite o looping do carrossel
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Número de slides visíveis ao mesmo tempo
    slidesToScroll: 1, // Número de slides para mover por vez
    autoplay: true, // Habilita autoplay
    autoplaySpeed: 4000, // Tempo de transição entre os slides
  };

  return (
    <Box width="100%" mx="auto">
      <Slider {...settings}>
        <Box height={["300px"]} position="relative">
          <Image
            src="/images/carousel/1.jpg"
            alt="Imagem 1"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box height={["300px"]} position="relative">
          <Image
            src="/images/carousel/2.jpg"
            alt="Imagem 2"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box height={["300px"]} position="relative">
          <Image
            src="/images/carousel/3.jpg"
            alt="Imagem 3"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box height={["300px"]} position="relative">
          <Image
            src="/images/carousel/4.jpg"
            alt="Imagem 4"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box height={["300px"]} position="relative">
          <Image
            src="/images/carousel/5.jpg"
            alt="Imagem 5"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box height={["300px"]} position="relative">
          <Image
            src="/images/carousel/6.jpg"
            alt="Imagem 6"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default ImageCarousel;

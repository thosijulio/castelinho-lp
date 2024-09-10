import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import "./imageCarousel.css";
import getCarouselImages from "../api/getCarouselImage";

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
  const images = getCarouselImages();

  return (
    <Box width="100%" mx="auto">
      <Slider {...settings}>
        {images?.map((image, index) => (
          <Box height={["300px"]} key={index} position="relative">
            <Image
              src={image.path}
              alt={image.name}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;

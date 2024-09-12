import { Box, Image } from "@chakra-ui/react";
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
    <Box
      backgroundColor="blue !important"
      mx="auto"
      height={["200px"]}
      textAlign="center"
      width={["400px"]}
    >
      <Slider {...settings}>
        {images?.map((image, index) => (
          <Box key={index}>
            <Image src={image.path} alt={image.name} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;

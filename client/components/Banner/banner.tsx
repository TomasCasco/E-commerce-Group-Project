import React from 'react';
import { Box, IconButton, useBreakpointValue, Image } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '2000px', md: '50%' });
  const side = useBreakpointValue({ base: '2000px', md: '20px' });

  // These are the images used in the slide
  const cards = [
    'https://logitechar.vteximg.com.br/arquivos/Banners-Desktop03.png?v=637764782016230000',
    'https://logitechar.vteximg.com.br/arquivos/POPS_BannersWeb_Desktop1.jpg?v=637812434118830000',
    'https://logitechar.vteximg.com.br/arquivos/Banners-Desktop03-G413.png?v=637801214928630000',
  ];

  return (
    <Box
      position={'relative'}
      width={'full'}
      height="480px"
      alignContent="center"
      alignItems={"center"}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="transparent"
        h='50%'
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        _focus={
          {
            border:"none"
          }
        }  

        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}  heigth="100px !important">
        {cards.map((url, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            /* backgroundImage={`url(${url})`} */
          >
          <Image src={url} width="100%" height={"450px"}>
          </Image>
          </Box>
        ))}
      </Slider>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="transparent"
        h='50%'
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        _focus={
          {
            border:"none"
          }
        }  
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
    </Box>
  );
}
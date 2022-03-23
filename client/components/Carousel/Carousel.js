import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./CarouselButtons";
import { Box, Image } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const options = { delay: 3000 }; // Options
const autoplayRoot = (emblaRoot) => emblaRoot.parentElement; // Root node
const autoplay = Autoplay(options, autoplayRoot);

export default function Carousel({ slides }) {
  const [viewportRef, embla] = useEmblaCarousel(
    { skipSnaps: true, loop: true },
    [autoplay]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Box>
      <Box className="embla" h={{ base: "250px", md: "100%" }}>
        <Box className="embla__viewport" ref={viewportRef} h="100%">
          <Box className="embla__container" h="100%">
            {slides.map((url) => (
              <Box className="embla__slide" key={url + 1} h="100%">
                <Box className="embla__slide__inner" h="100%">
                  <Image
                    className="embla__slide__img"
                    src={url}
                    alt="A cool cat."
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </Box>
      <Box className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Box>
    </Box>
  );
}

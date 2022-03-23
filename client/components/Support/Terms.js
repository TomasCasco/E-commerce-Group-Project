import React from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import TERM_LIST from "./term.json";

export const Terms = ({ index, setIndex, currentTermId, setCurrentTermId }) => {
  return (
    <Flex direction="column" p={4} mb={15}>
      <Box mt="10" mb={10}>
        <Heading size="xl">Terms and conditions</Heading>
      </Box>
      <Accordion allowToggle index={index}>
        {TERM_LIST.map((term) => (
          <AccordionItem key={term.id} name={`accordion-button-${term.id}`}>
            <AccordionButton
              onClick={() => {
                if (term.id === currentTermId) {
                  console.log("True");
                  setCurrentTermId(null);
                  setIndex(null);
                } else {
                  setCurrentTermId(term.id);
                  setIndex(term.id - 1);
                }
              }}
            >
              <Box
                flex="1"
                textAlign="left"
                fontSize={{ base: "2xl", md: "lg" }}
              >
                <Text fontWeight="semibold">{term.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={4}>{term.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

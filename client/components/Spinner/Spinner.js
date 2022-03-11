import React from 'react'
import { Flex, Spinner } from "@chakra-ui/react";

export default function SpinnerComponent() {
  return (
    <Flex align="center" justifyContent={"center"} padding="150px">
        {
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      </Flex>
  )
}

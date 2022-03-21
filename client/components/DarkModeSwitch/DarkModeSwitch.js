import { useColorMode, Switch, Flex, Box } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex align="center">
        <Box px="1">
          <SunIcon />
        </Box>
        <Box px="1">
          <Switch onChange={toggleColorMode} isChecked={colorMode === "dark"} />
        </Box>
        <Box px="1">
          <MoonIcon />
        </Box>
      </Flex>
    </>
  );
};

export default DarkModeSwitch;

import {
  Button,
  DarkMode,
  HStack,
  LightMode,
  useColorMode,
} from "@chakra-ui/react";

export default function Posts() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <LightMode>
        <Button size="sm" colorScheme="blue">
          Light Mode Always
        </Button>
      </LightMode>

      <DarkMode>
        <Button size="sm" colorScheme="blue">
          Dark Mode Always
        </Button>
      </DarkMode>

      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  );
}

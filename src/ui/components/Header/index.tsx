import { HStack } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { Button } from "../commons/Button";

export const Header = () => {
  return (
    <HStack
      bg="purple.900"
      color="gray.0"
      justifyContent="space-between"
      px={8}
      py={4}
    >
      <Logo />
      <HStack spacing="32px">
        <Button label="Cadastrar" variant="outline" />
        <Button label="Entrar" />
      </HStack>
    </HStack>
  );
};

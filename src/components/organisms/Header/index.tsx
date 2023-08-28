import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/molecules/Logo";
import { HStack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <HStack
      bg="purple.900"
      color="gray.0"
      justifyContent="space-between"
      flexDir={["column", "row"]}
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

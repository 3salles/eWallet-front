import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/molecules/Logo";
import { routerPaths } from "@/routes/routerPaths";
import { HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LandingHeader = () => {
  const navigate = useNavigate();

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
        <Button
          label="Cadastrar"
          variant="outline"
          onClick={() => {
            navigate(routerPaths.signup);
          }}
        />
        <Button
          label="Entrar"
          onClick={() => {
            navigate(routerPaths.login);
          }}
        />
      </HStack>
    </HStack>
  );
};

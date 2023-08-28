import { Logo } from "@/components/molecules/Logo";
import { Link, Text, VStack } from "@chakra-ui/react";
import { LoginForm } from "../../molecules/login-form";

export const FormSection = () => {
  return (
    <VStack
      as="section"
      justifyContent="center"
      w={["100%", "50%"]}
      spacing={[8, 16]}
    >
      <Logo />
      <LoginForm />
      <Text color={["gray.0", "gray.400"]}>
        Não possui uma conta?{" "}
        <Link color="brand.500" fontWeight={700} href="/signup">
          Cadastre-se aqui
        </Link>
      </Text>
    </VStack>
  );
};

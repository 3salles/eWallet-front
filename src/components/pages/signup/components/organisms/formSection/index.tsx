import { Logo } from "@/components/molecules/Logo";
import { Link, Text, VStack } from "@chakra-ui/react";
import { SignUpForm } from "../../molecules/signup-form";

export const FormSection = () => {
  return (
    <VStack
      as="section"
      justifyContent="center"
      w={["100%", "50%"]}
      spacing={[8, 16]}
    >
      <Logo />
      <SignUpForm />
      <Text color={["gray.0", "gray.400"]}>
        Já possui uma conta?{" "}
        <Link color="brand.500" fontWeight={700} href="/login">
          Entre aqui
        </Link>
      </Text>
    </VStack>
  );
};

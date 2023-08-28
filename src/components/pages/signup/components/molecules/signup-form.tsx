import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { FormControl, VStack } from "@chakra-ui/react";

export const SignUpForm = () => {
  return (
    <FormControl>
      <VStack spacing={4}>
        <Input label="Nome" placeholder="John Doe" />
        <Input label="Nome de usuário" placeholder="john_doe" />
        <Input label="Senha" type="password" placeholder="******" />
        <Button label="Entrar" w={[300, 400]} mt="14px" />
      </VStack>
    </FormControl>
  );
};

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { routerPaths } from "@/routes/routerPaths";
import { FormControl, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <FormControl>
      <VStack spacing={4}>
        <Input label="Nome de usuário" placeholder="john_doe" />
        <Input label="Senha" type="password" placeholder="******" />
        <Button
          label="Entrar"
          w={[300, 400]}
          mt="14px"
          onClick={() => navigate(routerPaths.home)}
        />
      </VStack>
    </FormControl>
  );
};

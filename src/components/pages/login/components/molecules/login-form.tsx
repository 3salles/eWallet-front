import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import useAuthContext from "@/hooks/useAuthContext";
import { routerPaths } from "@/routes/routerPaths";
import { FormControl, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { login, addToken, authError, clearErrorMessage } = useAuthContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const hasError = authError.message !== undefined;

  const onSubmit = async () => {
    const token = await login({ username, password });
    setIsLoading(true);

    if (token) {
      addToken(token);
      navigate(routerPaths.home);
    }
  };

  const onResetInterface = () => clearErrorMessage();

  return (
    <FormControl>
      <VStack spacing={4}>
        <Input
          label="Nome de usuário"
          placeholder="john_doe"
          onChange={(evt) => setUsername(evt.target.value)}
          isInvalid={hasError}
          onFocus={onResetInterface}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="******"
          onChange={(evt) => setPassword(evt.target.value)}
          isInvalid={hasError}
          onFocus={onResetInterface}
        />
        {hasError && (
          <Text color="red.500" fontSize="s">
            Usuário e/ou senha incorretos
          </Text>
        )}
        <Button
          label="Entrar"
          type="submit"
          w={[300, 400]}
          mt="14px"
          onClick={onSubmit}
          isLoading={isLoading}
        />
      </VStack>
    </FormControl>
  );
};

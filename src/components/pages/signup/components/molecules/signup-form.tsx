import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import useAuthContext from "@/hooks/useAuthContext";
import { routerPaths } from "@/routes/routerPaths";
import { cookiesUtils } from "@/utils/cookies.utils";
import { FormControl, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const { register, clearErrorMessage, authError } = useAuthContext();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalidError, setInvalidError] = useState({
    name: false,
    username: false,
    password: false,
  });

  const onSubmit = () => {
    register({ name, username, password });

    const token = cookiesUtils.getCookies("token");

    setIsLoading(true);

    if (token) {
      navigate(routerPaths.home);
    }
  };

  const onResetInterface = () => {
    setIsLoading(false);
    clearErrorMessage();
  };

  useEffect(() => {
    onResetInterface();
  }, []);

  return (
    <FormControl>
      <VStack spacing={4}>
        <Input
          label="Nome"
          placeholder="John Doe"
          onChange={(evt) => setName(evt.target.value)}
          isInvalid={invalidError.name}
          helperText="Este campo é obrigatório"
          onBlur={() => setInvalidError({ ...invalidError, name: name === "" })}
        />
        <Input
          label="Nome de usuário"
          placeholder="john_doe"
          isInvalid={authError.message !== undefined || invalidError.username}
          helperText={
            invalidError.username
              ? "Este campo é obrigatório"
              : "Nome de usuário já existe"
          }
          onFocus={onResetInterface}
          onChange={(evt) => setUsername(evt.target.value)}
          onBlur={() =>
            setInvalidError({ ...invalidError, username: username === "" })
          }
        />
        <Input
          label="Senha"
          type="password"
          placeholder="******"
          onChange={(evt) => setPassword(evt.target.value)}
          helperText="Este campo é obrigatório"
          isInvalid={invalidError.password}
          onBlur={() =>
            setInvalidError({ ...invalidError, password: password === "" })
          }
        />
        <Button
          label="Entrar"
          w={[300, 400]}
          mt="14px"
          onClick={onSubmit}
          isLoading={isLoading}
        />
      </VStack>
    </FormControl>
  );
};

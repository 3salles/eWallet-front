import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import notFoundImage from "@/assets/images/404.png";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { routerPaths } from "@/routes/routerPaths";
import { motion } from "framer-motion";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleReturnToHomePage = () => {
    navigate(routerPaths.home);
  };

  return (
    <Flex
      as="section"
      bg="gray.50"
      height="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      <Heading>Ops! O cofrinho está vazio!</Heading>
      <Flex position="relative" my={4}>
        <Box
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          // eslint-disable-next-line
          // @ts-ignore
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          width={400}
          height={400}
          bg="brand.50"
          borderRadius="100%"
          position="absolute"
          left={-5}
        />
        <Box as={motion.div} animate={{ opacity: [0, 1] }} zIndex={9999}>
          <Image
            src={notFoundImage}
            alt="Imagem de um cofrinho de porco quebrado e triste com duas cédulas de dinheiro saindo dele voando e três moedas de ouro no chão"
            w={400}
            h={400}
          />
        </Box>
      </Flex>
      <Text>Não foi possível encontrar a página que você busca.</Text>
      <Button
        mt={4}
        label="Voltar para página inicial"
        onClick={handleReturnToHomePage}
      />
    </Flex>
  );
};

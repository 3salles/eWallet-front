import { Box, Heading, Text } from "@chakra-ui/react";

export const HeaderSection = () => {
  return (
    <Box textAlign="center">
      <Heading mt={32}>
        Organize suas{" "}
        <Text as="span" color="brand.500">
          finanças
        </Text>
      </Heading>
      <Text fontSize="20px">
        Acompanhe sua vida financeira com tranquilidade e conforto
      </Text>
    </Box>
  );
};

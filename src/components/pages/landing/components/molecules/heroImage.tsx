import { Stack, Image, Text } from "@chakra-ui/react";
import { heroBackground } from "../atoms/heroBackground";

export const HeroImage = () => {
  return (
    <>
      {heroBackground.map((hero) => (
        <Stack key={hero.text} alignItems="center">
          <Image height={150} src={hero.src} alt={hero.alt} />
          <Text fontWeight={700}>{hero.text}</Text>
        </Stack>
      ))}
    </>
  );
};

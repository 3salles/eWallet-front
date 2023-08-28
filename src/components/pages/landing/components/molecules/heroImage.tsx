import { Stack, Image } from "@chakra-ui/react";
import { heroBackground } from "../atoms/heroBackground";
import { HeroText } from "../atoms/heroText";

export const HeroImage = () => {
  return (
    <>
      {heroBackground.map((hero) => (
        <Stack key={hero.text} alignItems="center">
          <Image height={150} src={hero.src} alt={hero.alt} />
          <HeroText label={hero.text} />
        </Stack>
      ))}
    </>
  );
};

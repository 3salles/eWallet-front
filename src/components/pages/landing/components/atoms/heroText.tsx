import { textUtils } from "@/utils/text.utils";
import { Text } from "@chakra-ui/react";

export const HeroText = ({ label }: { label: string }) => {
  const text = textUtils.splitSentence(label);
  return (
    <Text fontWeight={700}>
      <Text color="brand.500" as="span" mx={1}>
        {text.firstWord}
      </Text>
      {text.restOfSentence}
    </Text>
  );
};

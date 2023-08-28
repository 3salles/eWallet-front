import { Icon, IconsType } from "@/components/atoms/Icon";
import { HStack, Link, Text } from "@chakra-ui/react";

interface LinkLabelProps {
  label: string;
  icon: IconsType;
  redirect: string;
  active?: boolean;
}

export const LinkLabel = ({
  label,
  icon,
  active,
  redirect,
}: LinkLabelProps) => {
  return (
    <Link
      w="100%"
      textDecor="none"
      _hover={{ textDecoration: "none" }}
      href={redirect}
    >
      <HStack
        spacing={3}
        px={4}
        py={3}
        borderRadius="base"
        _hover={{ bg: "brand.50" }}
        justifyContent="center"
        bg={`${active ? "brand.500" : "transparent"}`}
      >
        <Icon name={icon} />
        <Text w="100%" color="gray.0" fontWeight={700}>
          {label}
        </Text>
      </HStack>
    </Link>
  );
};

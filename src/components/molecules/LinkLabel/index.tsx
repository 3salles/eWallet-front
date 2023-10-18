import { Icon } from "@/components/atoms/Icon";
import { ICustomIcons } from "@/types/icons.types";
import { HStack, Link, Text } from "@chakra-ui/react";

interface LinkLabelProps {
  label: string;
  icon: ICustomIcons;
  redirect?: string;
  active?: boolean;
  onClick?: () => void;
}

export const LinkLabel = ({
  label,
  icon,
  active,
  redirect,
  onClick,
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
        onClick={onClick}
      >
        <Icon name={icon} />
        <Text w="100%" color="gray.0" fontWeight={700}>
          {label}
        </Text>
      </HStack>
    </Link>
  );
};

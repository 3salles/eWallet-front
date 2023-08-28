/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from "@chakra-ui/react";
import { FiGrid } from "react-icons/fi";
import { BiTransfer } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa";
import { TfiTarget } from "react-icons/tfi";
import { CgLogOut } from "react-icons/cg";
import { IconType } from "react-icons";

export type IconsType =
  | "bill"
  | "goals"
  | "logout"
  | "overview"
  | "transaction";

interface IconProps extends ChakraIconProps {
  name: IconsType;
}

const icons = {
  bill: FaMoneyCheck,
  goals: TfiTarget,
  logout: CgLogOut,
  overview: FiGrid,
  transaction: BiTransfer,
};

export const Icon = ({ name, ...rest }: IconProps) => {
  return (
    <ChakraIcon
      color="gray.0"
      w="24px"
      h="24px"
      {...rest}
      as={icons[name] as IconType}
    />
  );
};

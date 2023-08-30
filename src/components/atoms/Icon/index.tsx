/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from "@chakra-ui/react";

import { IconType } from "react-icons";
import { FiGrid } from "react-icons/fi";
import { BiTransfer } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa";
import { TfiTarget } from "react-icons/tfi";
import { CgLogOut } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { BiSolidChevronsRight } from "react-icons/bi";
import { BsCreditCard2Back, BsWallet2 } from "react-icons/bs";
import { ICustomIcons } from "@/types/icons.types";

interface IconProps extends ChakraIconProps {
  name: ICustomIcons;
}

const icons = {
  bill: FaMoneyCheck,
  goals: TfiTarget,
  logout: CgLogOut,
  overview: FiGrid,
  transaction: BiTransfer,
  menu: SlMenu,
  chevron: BiSolidChevronsRight,
  credit: BsCreditCard2Back,
  wallet: BsWallet2,
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

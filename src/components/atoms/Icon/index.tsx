/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from "@chakra-ui/react";

import { IconType } from "react-icons";
import { FiGrid } from "react-icons/fi";
import {
  BiTransfer,
  BiSolidChevronsRight,
  BiJoystick,
  BiBuildingHouse,
  BiShoppingBag,
} from "react-icons/bi";
import { FaMoneyCheck, FaGraduationCap } from "react-icons/fa";
import { TfiTarget } from "react-icons/tfi";
import { CgLogOut } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { BsCreditCard2Back, BsWallet2 } from "react-icons/bs";
import { TbTargetArrow, TbChartGridDots } from "react-icons/tb";
import { CiMedal } from "react-icons/ci";
import { MdOutlineFoodBank, MdEmojiTransportation } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

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
  target: TbTargetArrow,
  medal: CiMedal,
  entertainment: BiJoystick,
  housing: BiBuildingHouse,
  food: MdOutlineFoodBank,
  transportation: MdEmojiTransportation,
  shopping: BiShoppingBag,
  others: TbChartGridDots,
  income: GiMoneyStack,
  education: FaGraduationCap,
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

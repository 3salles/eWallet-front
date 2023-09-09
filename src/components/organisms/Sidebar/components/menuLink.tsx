import { LinkLabel } from "@/components/molecules/LinkLabel";
import { routerPaths } from "@/routes/routerPaths";
import { ICustomIcons } from "@/types";
import { VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

interface LinkMenu {
  redirect: string;
  label: string;
  icon: ICustomIcons;
}

const links: LinkMenu[] = [
  {
    label: "Visão Geral",
    redirect: routerPaths.home,
    icon: "overview",
  },
  {
    label: "Transações",
    redirect: routerPaths.transactions,
    icon: "transaction",
  },
  {
    label: "Contas",
    redirect: routerPaths.bills,
    icon: "bill",
  },
  {
    label: "Objetivos",
    redirect: routerPaths.goals,
    icon: "goals",
  },
];

export const MenuLink = () => {
  const location = useLocation();

  return (
    <VStack spacing={4} alignItems="space-between">
      {links.map((link) => (
        <LinkLabel
          key={link.label}
          icon={link.icon}
          label={link.label}
          active={location.pathname === link.redirect}
          redirect={link.redirect}
        />
      ))}
    </VStack>
  );
};

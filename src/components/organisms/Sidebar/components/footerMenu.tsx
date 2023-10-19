import { Avatar } from "@/components/atoms/Avatar";
import { LinkLabel } from "@/components/molecules/LinkLabel";
import useAuthContext from "@/hooks/useAuthContext";
import { cookiesUtils } from "@/utils/cookies.utils";
import { VStack, Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const FooterMenu = () => {
  const { logout } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    cookiesUtils.removeCookies("token");
    cookiesUtils.removeCookies("user");
    navigate("/");
  };

  return (
    <VStack spacing={8} w="100%">
      <LinkLabel label="Sair" icon="logout" onClick={handleLogout} />
      <Divider />
      <Avatar />
    </VStack>
  );
};

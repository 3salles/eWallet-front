import { Icon } from "@/components/atoms/Icon";
import { Sidebar } from "@/components/organisms/Sidebar";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

export const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Show breakpoint="(max-width: 780px)">
        <IconButton
          colorScheme="transparent"
          aria-label="Abrir menu"
          icon={<Icon name="menu" color="gray.0" />}
          ref={btnRef}
          onClick={onOpen}
        />
      </Show>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar />
        </DrawerContent>
      </Drawer>
    </>
  );
};

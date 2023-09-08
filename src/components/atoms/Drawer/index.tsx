import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
} from "@chakra-ui/react";

import { GrClose } from "react-icons/gr";
import { MutableRefObject, ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  ref?: MutableRefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

export const Drawer = ({
  isOpen,
  ref,
  title,
  onClose,
  content,
}: DrawerProps) => {
  return (
    <>
      <ChakraDrawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent p={8} maxW="420px">
          <IconButton
            aria-label="Fechar Drawer"
            fontSize="2xl"
            icon={<GrClose />}
            bg="transparent"
            width="24px"
            onClick={onClose}
          />
          <DrawerHeader
            textAlign="center"
            borderBottom="2px"
            borderColor="brand.500"
            mb={4}
          >
            {title}
          </DrawerHeader>

          <DrawerBody p={0}>{content}</DrawerBody>
          {/* <DrawerFooter p={0}>
            <HStack w="full" spacing={4}>
              {footer}
            </HStack>
          </DrawerFooter> */}
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};

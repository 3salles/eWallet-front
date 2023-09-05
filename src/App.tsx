import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { TransactionProvider } from "./context/transaction/transactionProvider";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TransactionProvider>
        <RouterProvider router={router} />
      </TransactionProvider>
    </ChakraProvider>
  );
}

export default App;

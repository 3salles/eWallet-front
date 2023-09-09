import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { TransactionProvider } from "./context/transaction/transactionProvider";
import { ExchangeProvider } from "./context/exchange/exchangeProvider";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TransactionProvider>
        <ExchangeProvider>
          <RouterProvider router={router} />
        </ExchangeProvider>
      </TransactionProvider>
    </ChakraProvider>
  );
}

export default App;

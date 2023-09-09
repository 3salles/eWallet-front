import ExchangeContext from "@/context/exchange/exchangeContext";
import { useContext } from "react";

const useExchangeContext = () => useContext(ExchangeContext);

export default useExchangeContext;

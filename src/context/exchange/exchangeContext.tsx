import { IExchangeContext } from "@/types";
import { createContext } from "react";

const ExchangeContext = createContext({} as IExchangeContext);

export default ExchangeContext;

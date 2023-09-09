/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { getCurrency } from "@/services/currencyAPI";
import { IExchange } from "@/types";
import dayjs from "dayjs";
import { ReactNode, useEffect, useMemo, useState } from "react";
import ExchangeContext from "./exchangeContext";

export const ExchangeProvider = ({ children }: { children: ReactNode }) => {
  const [exchanges, setExchanges] = useState([] as IExchange[]);

  const fetchHistoricalExchange = async () => {
    const today = dayjs().format("YYYY-MM-DD");
    const monthAgo = dayjs(today).subtract(1, "month").format("YYYY-MM-DD");
    const response = await getCurrency({ date_from: monthAgo, date_to: today });

    setExchanges(response.data.data);
  };

  useEffect(() => {
    void fetchHistoricalExchange();
  }, []);

  const contextValue = useMemo(
    () => ({
      exchanges,
    }),
    [exchanges]
  );

  return (
    <ExchangeContext.Provider value={contextValue}>
      {children}
    </ExchangeContext.Provider>
  );
};

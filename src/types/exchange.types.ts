export interface IExchange {
  [date: string] : {
    'BRL': number;
    'USD': number;
  }
}

export interface IExchangeFetchParams {
  date_from: string;
  date_to: string;
}
export interface IExchangeContext {
  exchanges: any,
}
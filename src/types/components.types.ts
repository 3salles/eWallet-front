import { IChartData, IChartType } from ".";
import { ICustomIcons } from "./icons.types";

export interface IFinancialInfo  {
  label: string;
  value: string;
  color: string;
  icon: ICustomIcons;
}


export interface IChartCard {
  income: IFinancialInfo;
  outcome: IFinancialInfo;
  chartType: IChartType;
  data: IChartData[];
  chartLegend: string;
}

export type ICardInfoType = "income" | "outcome" | "amount" | "goal";
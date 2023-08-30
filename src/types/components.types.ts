import { IChartData } from ".";
import { ICustomIcons } from "./icons.types";

export interface IFinancialInfo  {
  label: string;
  value: string;
  color: string;
  icon: ICustomIcons;
}

export type  IChartType = "donut" | "bar" | "gauge"

export interface IChartCard {
  income: IFinancialInfo;
  outcome: IFinancialInfo;
  chartType: IChartType;
  data: IChartData[];
  chartLegend: string;
}
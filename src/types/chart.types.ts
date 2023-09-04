export interface TooltipData {
  fill: string;
  label: string;
}

export type  IChartType = "donut" | "bar" | "gauge"

export enum ChartTypeEnum {
  DONUT='donut',
  BAR = 'bar',
  GAUGE = 'gauge'
}
export interface IDonutChart {
  name: string;
  value: number;
}

export interface IGaugeChart extends IDonutChart {
  color: string;
}

export interface IBarChart {
  month: string;
  income: number;
  outcome: number;
}

export interface IAreaChart {
  date: string;
  value: number;
}

export interface IChartData {
  type: IChartType;
  data: IDonutChart[] | IGaugeChart[] | IBarChart[];
}
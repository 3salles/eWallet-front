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
  label: string;
  value: number;
}

export interface IGaugeChart extends IDonutChart {
  color: string;
}

export interface IBarChart {
  label: string;
  income: number;
  outcome: number;
}

export interface IChartData {
  type: IChartType;
  data: IDonutChart[] | IGaugeChart[] | IBarChart[];
}
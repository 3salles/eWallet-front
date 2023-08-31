export interface TooltipData {
  fill: string;
  name: string;
}

export type  IChartType = "donut" | "bar" | "gauge"

export interface IDonutChart {
  name: string;
  value: number;
}

export interface IGaugeChart extends IDonutChart {
  color: string;
}

export interface IBarChart {
  name: string;
  income: number;
  outcome: number;
}

export type IChartData  = IDonutChart | IGaugeChart | IBarChart
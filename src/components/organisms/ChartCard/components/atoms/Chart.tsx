import DonutChart from "@/components/atoms/Charts/DonutCharts";
import GaugeChart from "@/components/atoms/Charts/GaugeChart";
import VerticalBarChart from "@/components/atoms/Charts/VerticalBarChart";
import { IBarChart, IChartType, IDonutChart, IGaugeChart } from "@/types";

interface ChartProps {
  type: IChartType;
  chartData: IDonutChart[] | IGaugeChart[] | IBarChart[];
}

export const Chart = ({ type, chartData }: ChartProps) => {
  const displayChart = {
    donut: <DonutChart chartData={chartData as IDonutChart[]} />,
    gauge: <GaugeChart chartData={chartData as IGaugeChart[]} />,
    bar: <VerticalBarChart />,
  };

  return displayChart[type];
};

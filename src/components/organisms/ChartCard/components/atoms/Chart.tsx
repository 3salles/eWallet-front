import DonutChart from "@/components/atoms/Charts/DonutCharts";
import GaugeChart from "@/components/atoms/Charts/GaugeChart";
import VerticalBarChart from "@/components/atoms/Charts/VerticalBarChart";
import { IChartType } from "@/types";

interface ChartProps {
  type: IChartType;
}

export const Chart = ({ type }: ChartProps) => {
  const displayChart = {
    donut: <DonutChart />,
    gauge: <GaugeChart />,
    bar: <VerticalBarChart />,
  };

  return displayChart[type];
};

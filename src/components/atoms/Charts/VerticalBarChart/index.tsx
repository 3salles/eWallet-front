import useWindowDimensions from "@/hooks/useWindowsDimenions";
import { NumberUtils } from "@/utils/number.utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { BarTooltip } from "./barTooltip";

import statistics from "@/mocks/statistics.json";

const data = statistics.data;

export default function VerticalBarChart() {
  const { width } = useWindowDimensions();

  const chartWidth = () => {
    switch (true) {
      case width >= 1550:
        return 900;
      case width >= 1090 && width < 1550:
        return 700;
      default:
        return 400;
    }
  };

  return (
    <BarChart
      width={chartWidth()}
      height={300}
      data={data}
      margin={{
        top: 16,
        right: 20,
        left: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid opacity={0.4} vertical={false} />
      <XAxis
        dataKey="month"
        tickFormatter={(value: string) => {
          return value.slice(0, 3);
        }}
      />
      <YAxis
        dataKey="outcome"
        tickLine={false}
        axisLine={false}
        tickCount={8}
        type="number"
        tickFormatter={(number: number) =>
          `${NumberUtils.compactMoneyFormat(number)}`
        }
        domain={["dataMin", "auto"]}
      />
      <Tooltip content={<BarTooltip data={data} />} />
      <Bar dataKey="outcome" fill="#e73d1c" />
      <Bar dataKey="income" fill="#299d91" />
    </BarChart>
  );
}

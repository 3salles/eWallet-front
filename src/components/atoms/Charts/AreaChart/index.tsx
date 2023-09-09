/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import {
  AreaChart as RechartsAreaChart,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

import { NumberUtils } from "@/utils/number.utils";

import { AreaTooltip } from "./areaTooltip";
import useWindowDimensions from "@/hooks/useWindowsDimenions";

interface AreaChartData {
  date: string;
  value: number;
}
interface AreaChartProps {
  data: AreaChartData[];
}

export const AreaChart = ({ data }: AreaChartProps) => {
  const { width } = useWindowDimensions();
  const chartWidth = width < 1550 ? 300 : 400;

  return (
    <RechartsAreaChart width={chartWidth} height={250} data={data}>
      <Area
        dataKey="value"
        stackId="1"
        stroke="#24897E"
        fill="#299D91"
        opacity={1}
      />

      <YAxis
        dataKey="value"
        tickLine={false}
        axisLine={false}
        tickCount={8}
        type="number"
        tickFormatter={(number: number) =>
          `${NumberUtils.moneyFormatter(number)}`
        }
        domain={["dataMin", "auto"]}
      />
      <XAxis dataKey="date" hide />
      <Tooltip content={<AreaTooltip data={data} />} />
      <CartesianGrid opacity={0.4} vertical={false} />
    </RechartsAreaChart>
  );
};

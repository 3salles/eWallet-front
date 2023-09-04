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

import moneyExchange from "@/mocks/moneyExchange.json";

import { NumberUtils } from "@/utils/number.utils";

import { ChartAdapters } from "@/adapters/ChartAdapters";
import { AreaTooltip } from "./areaTooltip";

const money = moneyExchange.data;

const data = ChartAdapters.areaChartAdapter(money);

export const AreaChart = () => {
  return (
    <RechartsAreaChart
      width={450}
      height={250}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 10,
        bottom: 0,
      }}
    >
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

import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

import GaugeChartNeedle from "./needle";
import { IChartData, TooltipData } from "@/types/chart.types";
import { NumberUtils } from "@/utils/number.utils";

const dataChart: IChartData[] = [
  { name: "Saldo", value: 12500, color: "#299d91" },
  { name: "Meta", value: 50000, color: "#E8E8E8" },
];

const CX = 50;
const CY = 60;
const IR = 35; // Inner radius
const OR = 50; // Out radius
const Value = 12500; // Needle position value

export default function GaugeChart() {
  const [tooltipInfo, setTooltipInfo] = useState({} as TooltipData);

  return (
    <PieChart width={150} height={110}>
      <Tooltip
        itemStyle={{
          color: tooltipInfo.name !== "Meta" ? tooltipInfo.fill : "#000",
          fontSize: "12px",
        }}
        formatter={(value) => `${NumberUtils.moneyFormatter(value)}`}
      />
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={dataChart}
        cx={CX}
        cy={CY}
        innerRadius={IR}
        outerRadius={OR}
        stroke="none"
        onMouseEnter={(entry: TooltipData) => setTooltipInfo(entry)}
      >
        {dataChart.map((entry) => (
          <Cell key={`cell-${entry.name}`} fill={entry.color} />
        ))}
      </Pie>
      {GaugeChartNeedle(Value, dataChart, CX, CY, IR, OR, "#000")}
    </PieChart>
  );
}

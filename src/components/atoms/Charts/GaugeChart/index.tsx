import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

import GaugeChartNeedle from "./needle";
import { IGaugeChart, TooltipData } from "@/types/chart.types";
import { NumberUtils } from "@/utils/number.utils";

const CX = 50;
const CY = 60;
const IR = 35; // Inner radius
const OR = 50; // Out radius
// const Value = 12500; // Needle position value

export default function GaugeChart({
  chartData,
}: {
  chartData: IGaugeChart[];
}) {
  const [tooltipInfo, setTooltipInfo] = useState({} as TooltipData);
  const needlePosition =
    chartData.find((data) => data.name === "Saldo")?.value ?? 0;

  return (
    <PieChart width={150} height={110}>
      <Tooltip
        itemStyle={{
          color: tooltipInfo.name !== "Meta" ? tooltipInfo.fill : "#000000",
          fontSize: "14px",
        }}
        formatter={(value) => `${NumberUtils.moneyFormatter(value)}`}
      />
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={chartData}
        cx={CX}
        cy={CY}
        innerRadius={IR}
        outerRadius={OR}
        stroke="none"
        onMouseEnter={(entry: TooltipData) => setTooltipInfo(entry)}
      >
        {chartData.map((entry) => (
          <Cell key={`cell-${entry.name}`} fill={entry.color} />
        ))}
      </Pie>
      {GaugeChartNeedle(needlePosition, chartData, CX, CY, IR, OR, "#000")}
    </PieChart>
  );
}

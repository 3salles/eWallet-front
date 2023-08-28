import { TooltipData } from "@/types/chart.types";
import { NumberUtils } from "@/utils/number.utils";
import { useState } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const data = [
  {
    name: "Saída",
    value: 12500.5,
    unit: "R$",
  },
  {
    name: "Saldo",
    value: 8000,
    unit: "R$",
  },
];

export default function DonutsChart() {
  const [tooltipInfo, setTooltipInfo] = useState({} as TooltipData);

  const colors = ["#e73d1c", "#299d91"];

  return (
    <PieChart width={100} height={100}>
      <Tooltip
        itemStyle={{
          color: tooltipInfo?.fill,
          fontSize: "12px",
        }}
        formatter={(value) => `${NumberUtils.moneyFormatter(value)}`}
      />
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={35}
        outerRadius={50}
        onMouseEnter={(entry: TooltipData) => setTooltipInfo(entry)}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry.value}`}
            fill={colors[index % colors.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
}

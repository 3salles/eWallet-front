import useWindowDimensions from "@/hooks/useWindowsDimenions";
import { NumberUtils } from "@/utils/number.utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "Janeiro",
    entrada: 4000,
    saida: 2400,
  },
  {
    name: "Fevereiro",
    entrada: 3000,
    saida: 1398,
  },
  {
    name: "Marco",
    entrada: 2000,
    saida: 9800,
  },
  {
    name: "Abril",
    entrada: 2780,
    saida: 3908,
  },
  {
    name: "Maio",
    entrada: 1890,
    saida: 4800,
  },
  {
    name: "Junho",
    entrada: 4000,
    saida: 2400,
  },
  {
    name: "Julho",
    entrada: 3000,
    saida: 1398,
  },
  {
    name: "Agosto",
    entrada: 2000,
    saida: 9800,
  },
  {
    name: "Setembro",
    entrada: 2780,
    saida: 3908,
  },
  {
    name: "Outubro",
    entrada: 1890,
    saida: 4800,
  },
  {
    name: "Novembro",
    entrada: 2780,
    saida: 3908,
  },
  {
    name: "Dezembro",
    entrada: 1890,
    saida: 4800,
  },
];

export default function VerticalBarChart() {
  const { width } = useWindowDimensions();
  const chartWidth = width < 1550 ? 450 : 600;

  return (
    <BarChart
      width={chartWidth}
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
        dataKey="name"
        tickFormatter={(value: string) => {
          return value.slice(0, 3);
        }}
      />
      <YAxis
        dataKey="saida"
        tickLine={false}
        axisLine={false}
        tickCount={8}
        type="number"
        tickFormatter={(number: number) =>
          `${NumberUtils.compactMoneyFormat(number)}`
        }
        domain={["dataMin", "auto"]}
      />
      <Tooltip />
      <Bar dataKey="saida" fill="#e73d1c" />
      <Bar dataKey="entrada" fill="#299d91" />
    </BarChart>
  );
}

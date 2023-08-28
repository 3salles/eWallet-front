import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "Janeiro",
    entrada: 4000,
    saida: 2400,
    amt: 2400,
  },
  {
    name: "Fevereiro",
    entrada: 3000,
    saida: 1398,
    amt: 2210,
  },
  {
    name: "Marco",
    entrada: 2000,
    saida: 9800,
    amt: 2290,
  },
  {
    name: "Abril",
    entrada: 2780,
    saida: 3908,
    amt: 2000,
  },
  {
    name: "Maio",
    entrada: 1890,
    saida: 4800,
    amt: 2181,
  },
];

export default function VerticalBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="saida" fill="#e73d1c" />
      <Bar dataKey="entrada" fill="#299d91" />
    </BarChart>
  );
}

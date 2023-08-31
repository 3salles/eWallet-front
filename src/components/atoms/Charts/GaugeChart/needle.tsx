import { IGaugeChart } from "@/types/chart.types";

const RADIAN = Math.PI / 180;

function GaugeChartNeedle(
  value: number,
  data: IGaugeChart[],
  cx: number,
  cy: number,
  iR: number,
  oR: number,
  color: string
) {
  let total = 0;
  data.forEach((item: IGaugeChart) => {
    total += item.value;
  });

  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="chart" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key="chart"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
}

export default GaugeChartNeedle;

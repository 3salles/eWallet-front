import { IChartData, IChartType, IDonutChart, IGaugeChart } from "@/types";
import { IGoalsResume } from "@/types/goals";
import { ITransactionResume } from "@/types/transactions";

const donutChartAdapter = (data: ITransactionResume): IDonutChart[] => {
  const adapter: IDonutChart[] = [
    {
      name: "Saída",
      value: data.income_amount,
    },
    {
      name: "Saída",
      value: data.outcome_amount,
    },
  ];

  return adapter;
};

const gaugeChartAdapter = (data: IGoalsResume): IGaugeChart[] => {
  const adapter: IGaugeChart[] = [
    {
      name: "Saldo",
      value: data.amount,
      color: "#299d91",
    },
    {
      name: "Meta",
      value: data.goal_value,
      color: "#E8E8E8"
    },
  ];

  return adapter;
};

const chartDataAdapter = (chartData:ITransactionResume | IGoalsResume, type: IChartType):IChartData => {
  const adapter = {
    donut: {
      type,
      data: donutChartAdapter(chartData as ITransactionResume)
    },
    bar: {
      type,
      data: donutChartAdapter(chartData as ITransactionResume)
    },
    gauge: {
      type,
      data: gaugeChartAdapter(chartData as IGoalsResume)
    }
  }

  return adapter[type]
}

export const ChartAdapters = {
  donutChartAdapter,
  chartDataAdapter,
  gaugeChartAdapter,
}
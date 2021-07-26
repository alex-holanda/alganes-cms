import { Line } from "react-chartjs-2";
import { Heading } from "../Typography/Heading";

import { Wrapper, Title } from "./styles";

const data: Chart.ChartData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Receitas",
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: "#09f",
      borderColor: "#09f",
      borderWidth: 0.5,
      yAxisID: "cashflow",
    },
    {
      label: "Despesas",
      data: [1, 2, 1, 4, 7, 9],
      fill: true,
      backgroundColor: "#274060",
      borderColor: "#274060",
      borderWidth: 0.5,
      yAxisID: "cashflow",
    },
  ],
};

const options: Chart.ChartOptions = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0,
    },
  },
  legend: {
    display: true,
    position: "bottom",
    align: "center",
    labels: {
      usePointStyle: true,
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        type: "linear",
        display: false,
        position: "left",
        id: "cashflow",
      },
    ],
  },
};

interface ChartProps {}

export function Chart({}: ChartProps) {
  return (
    <Wrapper>
      <Title>
        <Heading level={3}>
          {"Média de performance nos últimos 12 meses"}
        </Heading>
      </Title>

      <Line
        data={data}
        options={options}
        height={139}
        width={600}
        type="line"
      />
    </Wrapper>
  );
}

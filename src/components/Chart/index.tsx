import { Line } from "react-chartjs-2";
import { NoData } from "../NoData";
import { Heading } from "../Typography/Heading";

import { Wrapper, Title } from "./styles";

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

interface ChartProps {
  title: string;
  data: Chart.ChartData;
}

export function Chart({ title, data }: ChartProps) {
  return (
    <Wrapper>
      <Title>
        <Heading level={3}>{title}</Heading>
      </Title>
      {data ? (
        <Line
          data={data}
          options={options}
          height={139}
          width={600}
          type="line"
        />
      ) : (
        <NoData height={139} />
      )}
    </Wrapper>
  );
}

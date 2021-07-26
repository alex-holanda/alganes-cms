import { Line } from "react-chartjs-2";

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
  maintainAspectRatio: false,
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
    <div>
      <Line data={data} options={options} height={250} type="line" />
    </div>
  );
}

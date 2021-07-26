import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Chart } from "../components/Chart";

export default {
  title: "Example/Chart",
  component: Chart,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

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

export const Default = Template.bind({});
Default.args = {
  title: "Média de performance nos últimos 12 meses",
  data,
};

export const WithoutData = Template.bind({});
WithoutData.args = {
  title: "Média de performance nos últimos 12 meses",
};

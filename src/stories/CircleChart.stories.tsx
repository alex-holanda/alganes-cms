import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CircleChart } from "../components/CircleChart";

export default {
  title: "Example/CircleChart",
  component: CircleChart,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof CircleChart>;

const Template: ComponentStory<typeof CircleChart> = (args) => (
  <CircleChart {...args} />
);

export const Default = Template.bind({});
Default.args = {};

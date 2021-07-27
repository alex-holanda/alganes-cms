import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CircleChart } from "../components/CircleChart";

export default {
  title: "Example/CircleChart",
  component: CircleChart,
  argTypes: {
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  },
} as ComponentMeta<typeof CircleChart>;

const Template: ComponentStory<typeof CircleChart> = (args) => (
  <CircleChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  progress: 4,
  size: 150,
};

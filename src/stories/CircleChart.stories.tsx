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
    strokeWidth: {
      control: {
        type: "range",
        min: 5,
        max: 20,
      },
    },
  },
} as ComponentMeta<typeof CircleChart>;

const Template: ComponentStory<typeof CircleChart> = (args) => (
  <CircleChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  progress: 62,
  size: 150,
  caption: "web",
  theme: "default",
  strokeWidth: 8,
};

export const Primary = Template.bind({});
Primary.args = {
  progress: 81,
  size: 150,
  caption: "web",
  theme: "primary",
  strokeWidth: 8,
};

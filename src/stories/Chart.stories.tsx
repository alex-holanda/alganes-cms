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

export const Default = Template.bind({});
Default.args = {};

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProgressBar } from "../components/ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  progress: 50,
  title: "javascript",
  theme: "primary",
  width: 375,
};

export const Secondary = Template.bind({});
Secondary.args = {
  progress: 50,
  title: "javascript",
  theme: "secondary",
  width: 375,
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  title: "javascript",
  theme: "primary",
  width: 375,
};

export const ZeroProgress = Template.bind({});
ZeroProgress.args = {
  progress: 0,
  title: "javascript",
  theme: "primary",
  width: 375,
};

export const ProgressInHalfOfText = Template.bind({});
ProgressInHalfOfText.args = {
  progress: 9,
  title: "javascript",
  theme: "primary",
  width: 375,
};

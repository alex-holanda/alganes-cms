import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SessionController } from "../components/SessionController";

export default {
  title: "Example/SessionController",
  component: SessionController,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof SessionController>;

const Template: ComponentStory<typeof SessionController> = (args) => (
  <SessionController {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Cristiano Moreira Silva Costa do Nascimento",
  description: "editor há 2 anos",
};

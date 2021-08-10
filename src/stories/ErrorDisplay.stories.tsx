import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ErrorDisplay } from "../components/ErrorDisplay";

export default {
  title: "Example/ErrorDisplay",
  component: ErrorDisplay,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof ErrorDisplay>;

const Template: ComponentStory<typeof ErrorDisplay> = (args) => (
  <ErrorDisplay {...args} />
);

export const Default = Template.bind({});
Default.args = {
  small: false,
  title: "",
  message: "",
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  small: false,
  title: "Houve um erro",
  message: "",
};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  small: false,
  title: "",
  message: "Falha de comunicação com o servidor",
};

export const Small = Template.bind({});
Small.args = {
  small: true,
  title: "",
  message: "",
};

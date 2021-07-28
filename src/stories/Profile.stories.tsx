import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Profile } from "../components/Profile";

export default {
  title: "Example/Profile",
  component: Profile,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Felipe Hasch",
  description: "criador de conteúdo há 3 anos",
};

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TagInput } from "../components/TagInput";

export default {
  title: "Example/TagInput",
  component: TagInput,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof TagInput>;

const Template: ComponentStory<typeof TagInput> = (args) => (
  <TagInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Insira as tags deste post",
  tags: [{ id: "1", text: "JavaScript" }],
};

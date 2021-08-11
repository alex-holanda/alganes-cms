import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MarkdownEditor } from "../app/components/MarkdownEditor";

export default {
  title: "Example/MarkdownEditor",
  component: MarkdownEditor,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof MarkdownEditor>;

const Template: ComponentStory<typeof MarkdownEditor> = (args) => (
  <MarkdownEditor {...args} />
);

export const Default = Template.bind({});
Default.args = {};

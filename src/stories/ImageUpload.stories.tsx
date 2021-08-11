import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ImageUpload } from "../app/components/ImageUpload";

export default {
  title: "Example/ImageUpload",
  component: ImageUpload,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (args) => (
  <ImageUpload {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Thumbnail do post",
};

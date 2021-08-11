import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WordPriceCounter } from "../app/components/WordPriceCounter";

export default {
  title: "Example/WordPriceCounter",
  component: WordPriceCounter,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof WordPriceCounter>;

const Template: ComponentStory<typeof WordPriceCounter> = (args) => (
  <WordPriceCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  wordsCounter: 20,
  pricePerWord: 0.25,
};

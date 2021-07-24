import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "../components/Table";

export default {
  title: "Example/Table",
  component: Table,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {};
